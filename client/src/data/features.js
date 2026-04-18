import {
  FaBolt,
  FaCarSide,
  FaMicrophone,
  FaShieldAlt,
  FaChargingStation,
  FaSun
} from "react-icons/fa"

const features = [
  {
    id: 1,
    title: "Fast Charging",
    description: "Charge up to 80% in just 30 minutes.",
    icon: FaChargingStation,
  },
  {
    id: 2,
    title: "AI Navigation",
    description: "Smart route suggestions with real-time updates.",
    icon: FaCarSide,
  },
  {
    id: 3,
    title: "Voice Commands",
    description: "Control navigation, music, and calls hands-free.",
    icon: FaMicrophone,
  },
  {
    id: 4,
    title: "Advanced Safety",
    description: "Equipped with lane assist and collision alerts.",
    icon: FaShieldAlt,
  },
  {
    id: 5,
    title: "Long Battery Range",
    description: "Drive up to 600 km on a single charge.",
    icon: FaBolt,
  },
  {
    id: 6,
    title: "Panoramic Sunroof",
    description: "Enjoy premium open-air driving comfort.",
    icon: FaSun,
  },
]

export default features