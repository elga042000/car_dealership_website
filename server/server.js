const dns = require('dns')
dns.setServers(['1.1.1.1', '8.8.8.8'])
dns.setDefaultResultOrder('ipv4first')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Booking = require('./models/Booking')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 30000,
})
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB Error:', err))

app.post('/book-test-drive', async (req, res) => {
  try {
    const booking = new Booking(req.body)
    await booking.save()

    res.json({
      success: true,
      message: 'Booking request submitted successfully',
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    })
  }
})

app.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find()
    res.json(bookings)
  } catch (error) {
    console.log(error)
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})