import cars from "../data/cars"
import { motion } from "framer-motion"
import { useState } from "react"

function Models() {
  const [selectedCar, setSelectedCar] = useState(null)

  return (
    <>
      <section
        id="models"
        className="relative py-16 sm:py-20 md:py-28 px-5 sm:px-8 lg:px-12"
      >
        {/* Background glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-14 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Models
              </span>
            </h2>

            <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Explore luxury, performance and innovation crafted for the future of driving.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">

            {cars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden w-full max-w-md mx-auto sm:max-w-none"
                data-car-name={car.name.toLowerCase()}
              >

                {/* Glow border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 opacity-0 group-hover:opacity-100 blur-2xl transition"></div>

                {/* Card */}
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-500/10 transition duration-300">

                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="py-5 sm:py-6 md:py-6"
                    style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {car.name}
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      {car.type}
                    </p>

                    {/* Specs */}
                    <div className="mt-4 space-y-2 text-sm text-slate-300">
                      <p className="flex items-center justify-between gap-4">
                        <span>Price</span>
                        <span className="text-white">{car.price}</span>
                      </p>

                      <p className="flex items-center justify-between gap-4">
                        <span>Range</span>
                        <span className="text-white">{car.range}</span>
                      </p>

                      <p className="flex items-center justify-between gap-4">
                        <span>Top Speed</span>
                        <span className="text-white">{car.topSpeed}</span>
                      </p>
                    </div>

                    {/* Button */}
                    <button
                      data-view-details={car.name.toLowerCase()}
                      onClick={() => setSelectedCar(car)}
                      className="btn-modern mt-6 w-full"
                    >
                      View Details
                    </button>

                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {selectedCar && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
          onClick={() => setSelectedCar(null)}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            isolation: "isolate",
          }}
        >
          <div
            className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/20 p-6 sm:p-8 text-white"
            onClick={(event) => event.stopPropagation()}
            style={{
              backgroundColor: "#0f172a",
              opacity: 1,
              boxShadow: "0 22px 50px rgba(0, 0, 0, 0.72)",
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">{selectedCar.name}</h3>
                <p className="text-slate-300 mt-1">{selectedCar.type}</p>
              </div>
              <button
                onClick={() => setSelectedCar(null)}
                className="btn-modern-secondary btn-modern-compact text-slate-200"
                aria-label="Close car details"
              >
                ✕
              </button>
            </div>

            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="mt-5 w-full h-52 object-cover rounded-xl"
            />

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-slate-800 p-3">
                <p className="text-slate-300">Price</p>
                <p className="text-white font-semibold">{selectedCar.price}</p>
              </div>
              <div className="rounded-lg bg-slate-800 p-3">
                <p className="text-slate-300">Range</p>
                <p className="text-white font-semibold">{selectedCar.range}</p>
              </div>
              <div className="rounded-lg bg-slate-800 p-3">
                <p className="text-slate-300">Top Speed</p>
                <p className="text-white font-semibold">{selectedCar.topSpeed}</p>
              </div>
              <div className="rounded-lg bg-slate-800 p-3">
                <p className="text-slate-300">Battery</p>
                <p className="text-white font-semibold">{selectedCar.battery}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Models