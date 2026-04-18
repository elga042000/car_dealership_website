import { useState } from "react"
import cars from "../data/cars"

function AssistantPanel({ onAction }) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [chat, setChat] = useState([
    {
      sender: "bot",
      text: "Hi, I am the Elentra AI assistant. Ask me about cars, pricing, or recommendations.",
    },
  ])

  const handleWebsiteActionClick = (action, chatIndex) => {
    if (typeof onAction === "function") {
      onAction(action)
    }

    setChat((prev) =>
      prev.map((item, index) =>
        index === chatIndex ? { ...item, actionHandled: true } : item
      )
    )

    if (action?.type === "scroll_to_section" && action?.sectionId === "pricing") {
      setIsOpen(false)
    }
  }

  const handleSend = () => {
    if (!message.trim()) return

    const userMessage = {
      sender: "user",
      text: message,
    }

    let action = null

    const lowerMessage = message.toLowerCase()

    const matchedCar = cars.find((car) =>
      lowerMessage.includes(car.name.toLowerCase())
    )

    const wantsDetails =
      lowerMessage.includes("open") ||
      lowerMessage.includes("details") ||
      lowerMessage.includes("detail") ||
      lowerMessage.includes("spec") ||
      lowerMessage.includes("specs") ||
      lowerMessage.includes("full info")

    if (matchedCar && wantsDetails) {
      // Behavior 1: open details modal for a specific model.
      action = { type: "open_car_details", carName: matchedCar.name }
    } else if (
      lowerMessage.includes("models") ||
      lowerMessage.includes("show cars")
    ) {
      // Behavior 2: scroll to page sections.
      action = { type: "scroll_to_section", sectionId: "models" }
    } else if (lowerMessage.includes("pricing")) {
      const botMessage = {
        sender: "bot",
        text: "Our pricing starts from ₹18 Lakhs (Elentra X1), with E5 at ₹24 Lakhs, S7 at ₹28 Lakhs, T8 at ₹35 Lakhs, and R9 at ₹42 Lakhs.",
        action: { type: "scroll_to_section", sectionId: "pricing" },
        actionLabel: "Need clarification? Show pricing in website",
      }
      setChat((prev) => [...prev, userMessage, botMessage])
      setMessage("")
      return
    } else if (
      lowerMessage.includes("book") ||
      lowerMessage.includes("test drive")
    ) {
      action = { type: "scroll_to_section", sectionId: "booking" }
    } else if (lowerMessage.includes("features")) {
      action = { type: "scroll_to_section", sectionId: "features" }
    } else if (lowerMessage.includes("comparison")) {
      const botMessage = {
        sender: "bot",
        text: "Quick comparison: X1 is budget-friendly, E5 is best for family seating, S7 gives highest range, R9 is the performance model, and T8 is built for utility.",
        action: { type: "scroll_to_section", sectionId: "comparison" },
        actionLabel: "Need clarification? Show comparison in website",
      }
      setChat((prev) => [...prev, userMessage, botMessage])
      setMessage("")
      return
    } else if (lowerMessage.includes("contact")) {
      action = { type: "scroll_to_section", sectionId: "contact" }
    } else if (lowerMessage.includes("cheapest")) {
      // Behavior 3: scroll to a specific model card.
      action = { type: "scroll_to_car", carName: "Elentra X1" }
    } else if (lowerMessage.includes("highest range")) {
      action = { type: "scroll_to_car", carName: "Elentra S7" }
    } else if (lowerMessage.includes("family")) {
      action = { type: "scroll_to_car", carName: "Elentra E5" }
    } else if (lowerMessage.includes("sports")) {
      action = { type: "scroll_to_car", carName: "Elentra R9" }
    } else if (lowerMessage.includes("under 25")) {
      action = { type: "scroll_to_car", carName: "Elentra X1" }
    } else if (lowerMessage.includes("luxury")) {
      action = { type: "scroll_to_car", carName: "Elentra S7" }
    } else if (lowerMessage.includes("pickup")) {
      action = { type: "scroll_to_car", carName: "Elentra T8" }
    } else if (lowerMessage.includes("7 seat")) {
      action = { type: "scroll_to_car", carName: "Elentra E5" }
    } else if (lowerMessage.includes("fastest")) {
      action = { type: "scroll_to_car", carName: "Elentra R9" }
    } else if (matchedCar) {
      action = { type: "scroll_to_car", carName: matchedCar.name }
    }

    if (action && typeof onAction === "function") {
      onAction(action)
      setIsOpen(false)
    }

    setChat((prev) => [...prev, userMessage])

    setMessage("")
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[999999] w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black text-white shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center border border-white/40 hover:scale-110 transition-all duration-300"
        style={{
          position: "fixed",
          bottom: "1.25rem",
          right: "1.25rem",
          zIndex: 999999,
          backgroundColor: "#000000",
          color: "#ffffff",
          opacity: 1,
          isolation: "isolate",
        }}
        aria-label="Open AI assistant"
      >
        AI Assistant
      </button>

      {isOpen && (
        <div
          className="fixed bottom-24 right-3 sm:right-6 z-[999999] w-[92vw] sm:w-80 max-w-[360px] bg-black text-white rounded-2xl shadow-2xl border border-white/30 overflow-hidden"
          style={{
            position: "fixed",
            bottom: "6rem",
            right: "0.75rem",
            zIndex: 999999,
            backgroundColor: "#000000",
            color: "#ffffff",
            opacity: 1,
            isolation: "isolate",
            boxShadow: "0 18px 40px rgba(0, 0, 0, 0.75)",
          }}
        >
          <div
            className="flex items-center justify-between bg-black px-5 py-4 border-b border-white/20"
            style={{ backgroundColor: "#000000" }}
          >
            <h3 className="font-semibold">Elentra AI Assistant</h3>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-lg"
            >
              ✕
            </button>
          </div>

          <div
            className="h-80 overflow-y-auto p-5 space-y-4"
            style={{ backgroundColor: "#000000" }}
          >
            {chat.map((item, index) => (
              <div
                key={index}
                className={`max-w-[80%] rounded-xl p-3 ${
                  item.sender === "user"
                    ? "ml-auto bg-white text-black"
                    : "bg-zinc-900 border border-white/20"
                }`}
                style={
                  item.sender === "user"
                    ? { backgroundColor: "#ffffff", color: "#000000" }
                    : { backgroundColor: "#18181b", color: "#ffffff" }
                }
              >
                {item.text}
                {item.sender === "bot" && item.action && !item.actionHandled && (
                  <button
                    onClick={() => handleWebsiteActionClick(item.action, index)}
                    className="mt-3 inline-flex rounded-lg bg-white text-black px-3 py-1.5 text-xs font-medium hover:bg-zinc-200"
                  >
                    {item.actionLabel || "Show in website"}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div
            className="border-t border-white/20 p-5"
            style={{ backgroundColor: "#000000" }}
          >
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask something..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 rounded-xl bg-zinc-950 border border-white/20 p-3 outline-none text-sm text-white"
                style={{
                  backgroundColor: "#09090b",
                  color: "#ffffff",
                }}
              />

              <button
                onClick={handleSend}
                className="rounded-xl bg-white text-black px-4 py-2 hover:bg-zinc-200"
              >
                Send
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={() => setMessage("Which is the cheapest model?")}
                className="rounded-full bg-zinc-900 border border-white/20 px-3 py-1 text-xs"
              >
                Cheapest
              </button>

              <button
                onClick={() => setMessage("Suggest a family car")}
                className="rounded-full bg-zinc-900 border border-white/20 px-3 py-1 text-xs"
              >
                Family Car
              </button>

              <button
                onClick={() => setMessage("Which has the highest range?")}
                className="rounded-full bg-zinc-900 border border-white/20 px-3 py-1 text-xs"
              >
                Highest Range
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AssistantPanel