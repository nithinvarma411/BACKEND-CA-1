import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const app = express()

app.use(express.json())

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.error("error in db.js", error)
    }
}

app.get("/", (req, res) => {
    res.status.send("hello")
})

app.listen(5000, async (req, res) => {
    try {
        console.log("app running on port 5000")
    } catch (error) {
        console.error(error)
    }
})

