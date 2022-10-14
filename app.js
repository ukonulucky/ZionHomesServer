const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
const dBConnect = require("./dB/dBConnect")



const app = express()
const Port = process.env.Port || 5000
// middleware start
app.use(cors)

// middleware ends

const serverConnect = async() => {
    try {
        const res = await dBConnect()
        if (res) {
            app.listen(Port, () => {
                console.log(`DB conneted and server running on port ${Port}`)
            })
        }
    } catch (error) {
        console.log(error.message)
        process.exit()
    }
}

serverConnect()

