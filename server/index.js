const keys = require('./keys')
const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

//Postgres Client setup
const {Pool} = require('pg')
const pgClient = new Pool({
    user:key.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort

})

pgClient.on("error", ()=> console.log("Lost PG Connection"))

pgClient.query("CREATE TABLE IF NOT EXISTS values (number INT)")
    .catch(err=> console.log(err))