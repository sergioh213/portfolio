const express = require("express")
const app = express()
const db = require("./db/db.js")
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars")
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bc = require("./db/bcrypt.js")
const bcrypt = require('./db/bcrypt')
const csurf = require('csurf')

var session = require('express-session')
var Store = require('connect-redis')(session);

const nodemailer = require('nodemailer');
if (process.env.NODE_ENV == 'production') {
    secrets = process.env
} else {
    secrets = require('./secrets.json')
}

app.use(session({
    store: new Store({
        ttl: 3600,
        host: 'localhost',
        port: 6379
    }),
    resave: false,
    saveUninitialized: true,
    secret: 'my super fun secret'
}));
var hbs = exphbs.create({
    defaultLayout: "main",
    helpers:{
        foo: function(length, city){
            if (length == 1) {
                return `<h3 id="city-title">Only ${length} signer in ${city} so far</h3>`
            } else {
                return `<h3 id="city-title">${length} signers in ${city}</h3>`
            }
        }
    }
})
// const router = require('./routers/router')

// app.use(router)
app.use(
   cookieSession({
       secret: `I'm always angry.`,
       maxAge: 1000 * 60 * 60 * 24 * 14
   })
);

// app.engine('handlebars', hbs.engine)

app.use(cookieParser());
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
// app.use(csurf())
// app.use(function(req, res, next) {
//    res.locals.csrfToken = req.csrfToken();
//    next();
// });
app.engine("handlebars", hbs.engine)

app.set("view engine", "handlebars")

app.get("/", (req, res) => {
    console.log("rendering get /");
    res.render("content", {
        layout: "main"
    });
})

app.post("/mail", (req, res) => {
    console.log("yoyoo wtf is going onnnn", req.body);
    const output = `
        <p>New message from your portfolio website:</p>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Company: ${req.body.company}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: secrets.user,
            pass: secrets.pass
        }
    });

    let mailOptions = {
        from: '"Sergio\'s portfolio" <herrerocontact@gmail.com>',
        to: "herrerocontact@gmail.com",
        subject: "New submission to your website",
        text: "x",
        html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        res.json({
            success: true
        });
    });
});

app.get("*", (req, res) => {
    console.log("inside * route");
    res.redirect("/")
})

app.listen(process.env.PORT || 8080, () => console.log("listening on 8080 & Heroku"))
