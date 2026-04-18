const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  model: String,
  city: String,
  date: String,
  message: String,
})

module.exports = mongoose.model('Booking', bookingSchema)