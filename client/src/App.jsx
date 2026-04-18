import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Models from "./components/Models"
import Features from "./components/Features"
import Comparison from "./components/Comparison"
import Pricing from "./components/Pricing"
import BookingForm from "./components/BookingForm"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import AssistantPanel from "./components/AssistantPanel"

function App() {
  const handleAssistantAction = (action) => {
    if (!action?.type) return

    if (action.type === "scroll_to_car" && action.carName) {
      const normalizedName = action.carName.toLowerCase()
      const card = document.querySelector(`[data-car-name="${normalizedName}"]`)
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" })
      }
      return
    }

    if (action.type === "scroll_to_section" && action.sectionId) {
      const section = document.getElementById(action.sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      return
    }

    if (action.type === "open_car_details" && action.carName) {
      const normalizedName = action.carName.toLowerCase()
      const card = document.querySelector(`[data-car-name="${normalizedName}"]`)

      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" })
      }

      const detailsButton = document.querySelector(
        `[data-view-details="${normalizedName}"]`
      )
      if (detailsButton) {
        setTimeout(() => {
          detailsButton.click()
        }, 350)
      }
    }
  }

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden relative min-h-screen w-full">
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
        <Navbar />

        <div className="flex flex-col gap-y-24 md:gap-y-32">
          <Hero />
          <Models />
          <Features />
          <Comparison />
          <Pricing />
          <BookingForm />
          <Contact />
          <Footer />
        </div>
      </div>

      <AssistantPanel onAction={handleAssistantAction} />
    </div>
  )
}

export default App