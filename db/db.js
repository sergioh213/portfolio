const spicedPg = require("spiced-pg")

let db;

if (process.env.DATABASE_URL) {
    db = spicedPg(process.env.DATABASE_URL)
} else {
    db = spicedPg('postgres:sergioherrero:password@localhost:5432/petition');
}

exports.getSigners = function() {
     return db.query('SELECT * FROM signatures;')
        .then(results => {
            return results.rows
        })
}

exports.insertSignature = function(user_id, signature) {
    const q = `
        INSERT INTO signatures (user_id, signature)
        VALUES ($1, $2)
        RETURNING *`
    const params = [user_id, signature]
    return db.query(q, params).then(results => {
        return results.rows[0]
    })
}

exports.getSignatureId = function(id) {
    const params = [id]
    return db.query('SELECT * FROM signatures WHERE id = $1;', params)
        .then(results => {
            return results.rows[0]
        })
}

exports.getUserId = function(id) {
    const params = [id]
    return db.query('SELECT * FROM signatures WHERE user_id = $1;', params)
        .then(results => {
            return results.rows[0]
        })
}

exports.saveNewUser = function(firstname, lastname, email, password) {
    const q = `
        INSERT INTO users (first_name, last_name, email, hashed_password)
        VALUES ($1, $2, $3, $4)
        RETURNING *`
    const params = [firstname, lastname, email, password]
    return db.query(q, params).then(results => {
        return results.rows[0].id
    })
}

exports.getPasswordDB = function(email) {
    const params = [email]
    return db.query('SELECT hashed_password FROM users WHERE email = $1;', params)
        .then(results => {
            return results.rows[0]
        })
}

exports.getEmails = function(email) {
    const params = [email]
    return db.query('SELECT * FROM users WHERE email = $1;', params)
        .then(results => {
            return results.rows[0]
        })
}

exports.saveProfile = function(user_id, age, city, homepage) {
    const q = `
        INSERT INTO user_profiles (user_id, age, city, url)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `
    const params = [user_id, age || null, city || null, homepage || null]
    return db.query(q, params).then(results => {
        return results.rows[0]
    })
}

exports.updateUser = function(id, name, lastname, email, password) {
    const q = `
    UPDATE users
    SET first_name = $2,
    last_name = $3,
    email = $4,
    hashed_password = $5
    WHERE id = $1;
    `;
    const params = [id, name, lastname, email, password];
    return db.query(q, params).then(updatedProfile => {
        return updatedProfile.rows;
    });
};

exports.updateUserNoPassword = function(id, name, lastname, email) {
    const q = `
    UPDATE users
    SET first_name = $2,
    last_name = $3,
    email = $4
    WHERE id = $1;
    `;
    const params = [id, name, lastname, email];
    return db.query(q, params).then(updatedProfile => {
        return updatedProfile.rows;
    });
};

exports.updateProfile = function(user_id, age, city, url) {
    const q = `
    INSERT INTO user_profiles (user_id, age, city, url)
    VALUES ($1, $2, $3, $4)
    ON CONFLICT (user_id)
    DO UPDATE SET age = $2, city = $3, url = $4;
    `;
    const params = [user_id, age || null, city || null, url || null];
    return db.query(q, params).then(updatedProfile => {
        return updatedProfile.rows;
    });
};

exports.getList = function() {
    const q = `
        SELECT users.first_name, users.last_name, user_profiles.age, user_profiles.city, user_profiles.url, signatures.date_capture
        FROM users
        LEFT JOIN user_profiles
        ON user_profiles.user_id = users.id
        JOIN signatures
        ON signatures.user_id = users.id
        WHERE signatures.id IS NOT NULL;
        `;
    return db.query(q).then(results => {
        return results.rows;
    });
};

exports.specificCity = function(cityInput) {
    const params = [cityInput]
    const q =`
        SELECT users.id, first_name, last_name, age, city, url, signatures.date_capture
        FROM signatures
        LEFT JOIN user_profiles
        ON signatures.user_id = user_profiles.user_id
        LEFT JOIN users
        ON signatures.user_id = users.id
        WHERE LOWER(city) = LOWER($1);
        `
    console.log("city: ", params);
    return db.query(q, params)
        .then(results => {
            return results.rows
        })
}

exports.getUser = function(id) {
    return db.query('SELECT * FROM users WHERE id = $1;', [id])
       .then(results => {
           return results.rows[0]
       })
}

exports.getProfile = function(id) {
    return db.query('SELECT * FROM user_profiles WHERE user_id = $1;', [id])
       .then(results => {
           return results.rows[0]
       })
}

exports.deleteSignature = function(id) {
    const query = `DELETE FROM signatures WHERE user_id = $1`;
    const params = [id];
    return db.query(query, params).then(results => {
        return results.rows[0];
    });
};
