import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-slate-950">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        Drive the Future with Elentra Cars
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-gray-300 max-w-2xl mb-8 text-lg"
      >
        Luxury, performance and innovation in every mile.
      </motion.p>
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="flex flex-col sm:flex-row gap-4"
>

  {/* Primary Button */}
  <div className="flex flex-col sm:flex-row justify-center items-center mt-8">
  <a
    href="#models"
    className="btn-modern min-w-[180px] no-underline mb-4 sm:mb-0 sm:mr-6"
  >
    Explore Models
  </a>

  <a
    href="#booking"
    className="btn-modern-secondary min-w-[180px] no-underline"
  >
    Book Test Drive
  </a>
</div>

</motion.div>
    </section>
  )
}

export default Hero