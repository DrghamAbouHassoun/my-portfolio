import { useContext, useState } from "react"
import constants from "../constants/constants"
import { BiHome, BiMailSend, BiUser } from "react-icons/bi"
import { GiSuitcase } from "react-icons/gi"
import { CurrentPageContext } from "./Layout"
import { PiReadCvLogo } from "react-icons/pi"
import { FaBars } from "react-icons/fa6"

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
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const {currentPageIndex, handleChangeCurrentPageIndex} = useContext(CurrentPageContext);

  const handleClick = (index: number) => {
    setToggleMenu(false);
    handleChangeCurrentPageIndex(index)
  }
  return (
    <>
    <nav className="justify-center hidden md:flex items-center flex-col gap-5">
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
    <div className="flex md:hidden absolute top-10 right-20 z-10">
      <button className="text-[#ffffffa3] bg-[#151515] text-md custom-shadow-2 transition-all duration-500 text-2xl hover:text-[#ffffff] p-4 rounded-full absolute top-0 z-10" onClick={() => setToggleMenu(!toggleMenu)}>
        <FaBars size={24} />
      </button>
      <nav className="justify-center flex items-center flex-col gap-5 absolute top-0">
      {navLinksList.map((item, index) => (
        <button
          key={item.label}
          className={`text-[#ffffffa3] bg-[#151515] text-md custom-shadow-2 transition-all duration-1000 text-2xl hover:text-[#ffffff] p-4 rounded-full absolute top-0 left-0 ${toggleMenu ? `menu-translate-${index + 1} opacity-100`: "opacity-0"} ${currentPageIndex === item.index ? "bg-primary-200": ""}`}
          title={item.label + " " + item.index + ""}
          onClick={() => handleClick(item.index)}
        >
          {item.icon}
        </button>
      ))}
    </nav>
    </div>
    </>
  )
}

export default Navbar