const mongoose = require("mongoose")
// const dotenv = require("dotenv")
// dotenv.config()
require("dotenv").config({ path: "../.env" });

// connecting to mongodb
const MONGU__URL = process.env.MONGU__URL

const dBConnect = async() => {
    try {
        const res = await mongoose.connect(MONGU__URL,{
            autoIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        if (res) {
            return res
        }
    } catch (err) {
        console.log(err.message)
        process.exit()
    }
}

module.exports = dBConnect