import features from "../data/features"
import { motion } from "framer-motion"

function Features() {
  return (
    <section
      id="features"
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
          Why Choose Elentra Cars
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Built with luxury, safety, and future-ready technology for a premium driving experience.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="
                  group relative
                  bg-slate-900/60 backdrop-blur-md
                  border border-slate-800
                  p-8 rounded-3xl
                  shadow-lg
                  hover:shadow-blue-500/10
                  hover:-translate-y-2
                  hover:border-blue-500/40
                  transition-all duration-300
                "
              >
                {/* Icon container */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-500/10 mb-5 group-hover:bg-blue-500/20 transition">
                  <Icon className="text-3xl text-blue-400" />
                </div>

                <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-300 transition">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* subtle glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/5 to-transparent transition" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features