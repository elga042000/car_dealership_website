import { motion } from "framer-motion"

function Pricing() {
  const handleChoosePlan = (plan) => {
    window.dispatchEvent(
      new CustomEvent("elentra:plan-selected", {
        detail: { planTitle: plan.title, emi: plan.emi, downPayment: plan.price },
      })
    )

    const bookingSection = document.getElementById("booking")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const plans = [
    {
      title: "Basic Plan",
      price: "₹15,000 Down Payment",
      emi: "₹18,999 / month",
      warranty: "3 Years Warranty",
      insurance: "Insurance Included",
    },
    {
      title: "Premium Plan",
      price: "₹30,000 Down Payment",
      emi: "₹28,999 / month",
      warranty: "5 Years Warranty",
      insurance: "Premium Insurance Included",
    },
    {
      title: "Luxury Plan",
      price: "₹50,000 Down Payment",
      emi: "₹42,999 / month",
      warranty: "7 Years Warranty",
      insurance: "Luxury Insurance Included",
    },
  ]

  return (
    <section
      id="pricing"
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
          Flexible Pricing Plans
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Choose a finance plan that suits your budget and drive your dream car today.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="
                group relative
                bg-slate-900/60 backdrop-blur-md
                border border-slate-800
                rounded-3xl p-8
                shadow-lg
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:shadow-blue-500/10
                transition-all duration-300
              "
            >
              {/* Glow background */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-transparent transition" />

              {/* Title */}
              <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-300 transition">
                {plan.title}
              </h3>

              {/* Pricing highlight */}
              <div className="mb-6">
                <p className="text-blue-400 text-lg font-semibold">
                  {plan.price}
                </p>
                <p className="text-white text-2xl font-bold mt-2">
                  {plan.emi}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-3 text-gray-300 mb-8">
                <p>✔ {plan.warranty}</p>
                <p>✔ {plan.insurance}</p>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => handleChoosePlan(plan)}
                className="btn-modern w-full"
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing