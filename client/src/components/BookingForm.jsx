import { useEffect, useState } from "react"
import axios from "axios"
import cars from "../data/cars"

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    model: "",
    city: "",
    date: "",
    message: "",
  })

  const [success, setSuccess] = useState("")

  useEffect(() => {
    const handlePlanSelected = (event) => {
      const detail = event.detail || {}
      const planTitle = detail.planTitle || "Selected plan"
      const emi = detail.emi || ""
      const downPayment = detail.downPayment || ""

      setFormData((prev) => ({
        ...prev,
        message: `Interested in ${planTitle}. ${downPayment ? `Down payment: ${downPayment}. ` : ""}${emi ? `EMI: ${emi}.` : ""}`.trim(),
      }))
    }

    window.addEventListener("elentra:plan-selected", handlePlanSelected)
    return () => {
      window.removeEventListener("elentra:plan-selected", handlePlanSelected)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:5000/book-test-drive", formData)

      setSuccess("Your test drive request has been submitted successfully.")

      setFormData({
        name: "",
        email: "",
        phone: "",
        model: "",
        city: "",
        date: "",
        message: "",
      })
    } catch (error) {
      console.log(error)
      setSuccess("Something went wrong. Please try again.")
    }
  }

  const fieldClassName =
    "w-full rounded-xl p-4 text-sm sm:text-base transition focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
  const fieldStyle = {
    backgroundColor: "#ffffff",
    color: "#0f172a",
    border: "1px solid #d1d5db",
    boxShadow: "none",
  }

  return (
    <section
      id="booking"
      className="py-20 px-6 sm:px-8 lg:px-10"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Book a Test Drive
        </h2>

        <p className="text-center text-slate-300 mb-12">
          Experience the future of driving today.
        </p>

        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-8 rounded-2xl shadow-xl space-y-5 sm:space-y-6"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            isolation: "isolate",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={fieldClassName}
            style={fieldStyle}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={fieldClassName}
            style={fieldStyle}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={fieldClassName}
            style={fieldStyle}
            required
          />

          <select
            name="model"
            value={formData.model}
            onChange={handleChange}
            className={fieldClassName}
            style={fieldStyle}
            required
          >
            <option value="">Select Model</option>
            {cars.map((car) => (
              <option key={car.id} value={car.name}>
                {car.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="city"
            placeholder="Preferred City"
            value={formData.city}
            onChange={handleChange}
            className={fieldClassName}
            style={fieldStyle}
            required
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={fieldClassName}
            style={fieldStyle}
            required
          />

          <textarea
            name="message"
            placeholder="Additional Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={fieldClassName}
            style={fieldStyle}
          />

          <button
            type="submit"
            className="btn-modern w-full py-4"
            style={{ transform: "none" }}
          >
            Submit Request
          </button>

          {success && (
            <p className="text-center text-sm font-medium text-emerald-600">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default BookingForm