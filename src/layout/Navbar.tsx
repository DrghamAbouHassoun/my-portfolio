import { useContext } from "react"
import constants from "../constants/constants"
import { BiHome, BiMailSend, BiUser } from "react-icons/bi"
import { GiSuitcase } from "react-icons/gi"
import { CurrentPageContext } from "./Layout"
import { PiReadCvLogo } from "react-icons/pi"

const navLinksList = [
  {
    icon: <BiHome />,
    label: "Home",
    href: constants.HOME_PAGE,
    index: 0,
  },
  {
    icon: <BiUser />,
    label: "About Me",
    href: constants.ABOUT_PAGE,
    index: 1,
  },
  {
    icon: <PiReadCvLogo />,
    label: "Resume",
    index: 2
  },
  {
    icon: <GiSuitcase />,
    label: "Portfolio",
    href: constants.PORTFOLIO_URL,
    index: 3,
  },
  {
    icon: <BiMailSend />,
    label: "Contact Me",
    href: constants.CONTACT_PAGE,
    index: 4,
  },
]

const Navbar = () => {
  const {currentPageIndex, handleChangeCurrentPageIndex} = useContext(CurrentPageContext);
  return (
    <nav className="flex justify-center items-center flex-col gap-5">
      {navLinksList.map(item => (
        <button
          key={item.label}
          className={`text-[#ffffffa3] bg-[#151515] text-md custom-shadow-2 transition-all duration-500 text-2xl hover:text-[#ffffff] p-4 rounded-full ${currentPageIndex === item.index ? "bg-primary-200": ""}`}
          title={item.label + " " + item.index + ""}
          onClick={() => handleChangeCurrentPageIndex(item.index)}
        >
          {item.icon}
        </button>
      ))}
    </nav>
  )
}

export default Navbar