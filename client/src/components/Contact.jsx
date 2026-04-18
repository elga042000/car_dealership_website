import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Contact Us
        </h2>

        <p className="text-gray-400 mb-12">
          Reach out to Elentra Cars for any inquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-8 rounded-2xl">
            <FaPhoneAlt className="text-3xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">+91 98765 43210</p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <FaEnvelope className="text-3xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-400">hello@elentracars.com</p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <FaMapMarkerAlt className="text-3xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-400">
              Bommanahalli, Banguluru, India
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact