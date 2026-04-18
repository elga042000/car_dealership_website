import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center px-16 py-8 bg-slate-900 sticky top-0 z-50">
      <h1 className="px-16 py-16 pl-20 text-2xl font-bold text-blue-400">
        Elentra Cars
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-14 text-sm md:text-base text-white">
        <li>
          <a href="#models" className="hover:text-blue-400 transition">
            Models
          </a>
        </li>
        <li>
          <a href="#features" className="hover:text-blue-400 transition">
            Features
          </a>
        </li>
        <li>
          <a href="#pricing" className="hover:text-blue-400 transition">
            Pricing
          </a>
        </li>
        <li>
          <a href="#booking" className="hover:text-blue-400 transition">
            Book Test Drive
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-800 md:hidden">
          <ul className="flex flex-col gap-6 p-6 text-white text-base">
            <li>
              <a href="#models" onClick={() => setMenuOpen(false)}>
                Models
              </a>
            </li>
            <li>
              <a href="#features" onClick={() => setMenuOpen(false)}>
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#booking" onClick={() => setMenuOpen(false)}>
                Book Test Drive
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar