// import MyImage from "../assets/images/oo1-removebg.png";
import { useContext } from "react"
import { FaArrowRight, FaDownload } from "react-icons/fa"
import { CurrentPageContext } from "../layout/Layout"

const Home = () => {
  const { handleChangeCurrentPageIndex } = useContext(CurrentPageContext);

  return (
    <div className="flex flex-col justify-center items-center gap-5 text-center w-full h-full">
      {/* <div className="rounded-full border-2 border-gray-500 overflow-hidden h-[150px] w-[150px] relative">
        <img src={MyImage} alt="Dergham Bou Hassoun" className="w-full h-full" />
        <div className="absolute bg-[#0002] top-0 left-0 w-[100%] h-[100%]"></div>
      </div> */}
      <h1 className="text-5xl font-bold uppercase max-w-[700px]">I'm <span className="text-primary-200">Dergham Bou Hassoun</span></h1>
      <h3 className="text-xl">Full Stack Developer | Mobile Application Developer</h3>
      <p className="max-w-[700px] text-center">I'm a Syrian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
      <div className="flex justify-center items-center gap-4">
        <a href="/" className="flex items-center gap-2 p-3 px-5 bg-primary-200 text-white rounded-full font-bold">
          <FaDownload /> <span>Downloac CV</span>
        </a>
        <button 
          type="button" 
          className="flex items-center gap-2 p-3 px-5 border-2 border-primary-200 text-primary-200 rounded-full font-bold"
          onClick={() => handleChangeCurrentPageIndex(1)}
        >
          <FaArrowRight /> <span>View More</span>
        </button>
      </div>
    </div>
  )
}

export default Home