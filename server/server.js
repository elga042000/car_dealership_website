const dns = require("dns")
dns.setServers(["1.1.1.1", "8.8.8.8"])
dns.setDefaultResultOrder("ipv4first")

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Booking = require("./models/Booking")

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

console.log("Mongo URI exists:", !!process.env.MONGODB_URI)
console.log("Mongo URI value:", process.env.MONGODB_URI)

mongoose
  .connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 30000,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err))

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend server is running",
  })
})

app.post("/book-test-drive", async (req, res) => {
  try {
    const booking = new Booking(req.body)
    await booking.save()

    res.status(200).json({
      success: true,
      message: "Booking request submitted successfully",
    })
  } catch (error) {
    console.log("Booking Error:", error)

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    })
  }
})

app.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find()
    res.status(200).json(bookings)
  } catch (error) {
    console.log("Fetch Error:", error)

    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
    })
  }
})

module.exports = app