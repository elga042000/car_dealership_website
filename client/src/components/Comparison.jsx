import cars from "../data/cars"
import { motion } from "framer-motion"

function Comparison() {
  return (
    <section
      id="comparison"
      className="bg-slate-950 text-white py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Compare Models
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-400 mb-14 max-w-2xl mx-auto"
        >
          Compare specifications and choose the perfect Elentra model with clarity and confidence.
        </motion.p>

        {/* Table wrapper */}
        <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 backdrop-blur-md shadow-2xl">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[700px] text-left">

              {/* Header */}
              <thead className="bg-slate-800/70 text-gray-200 text-sm uppercase tracking-wider">
                <tr>
                  <th className="p-5">Model</th>
                  <th className="p-5">Price</th>
                  <th className="p-5">Range</th>
                  <th className="p-5">Top Speed</th>
                  <th className="p-5">Battery</th>
                  <th className="p-5">Seats</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-300">

                {cars.map((car, index) => (
                  <tr
                    key={car.id}
                    className="
                      border-t border-slate-800
                      hover:bg-slate-800/60
                      hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]
                      transition-all duration-300
                    "
                  >
                    <td className="p-5 font-semibold text-white">
                      {car.name}
                    </td>

                    <td className="p-5 text-blue-400 font-medium">
                      {car.price}
                    </td>

                    <td className="p-5">{car.range}</td>

                    <td className="p-5">{car.topSpeed}</td>

                    <td className="p-5">{car.battery}</td>

                    <td className="p-5">{car.seats}</td>
                  </tr>
                ))}

              </tbody>
            </table>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Comparison