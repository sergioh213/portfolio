const redis = require("redis")
const client = redis.createClient({
    host: "localhost",
    port: 6379
})

client.on("error", function(err) {
    console.log(err);
})

client.setex("funcky", 20, JSON.stringify("chicken"), function(err, data) {
    client.get("funcky", function(err, data) {
        console.log(err, data);
    })
})
