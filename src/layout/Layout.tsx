import { createContext, useState, useEffect } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "./Navbar";

interface LayoutProps {
  children: JSX.Element[];
}

interface ICurrentPageContext {
  currentPageIndex: number;
  handleChangeCurrentPageIndex: (newPageIndex: number) => void;
}

export const CurrentPageContext = createContext<ICurrentPageContext>({
  currentPageIndex: 0,
  handleChangeCurrentPageIndex: () => { },
})

const Layout = ({ children }: LayoutProps) => {
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  const handleChangeCurrentPageIndex = (newPageIndex: number) => {
    // setIsMoving(true);
    setCurrentPageIndex(newPageIndex);
    // setTimeout(() => setIsMoving(false), 3000);
  }

  useEffect(() => {
    setIsMoving(true);
    setTimeout(() => setIsMoving(false), 3000);
  }, [currentPageIndex]);

  return (
    <CurrentPageContext.Provider value={{ currentPageIndex, handleChangeCurrentPageIndex }}>
      <div className="w-[100vw] h-[100vh]">
        <div className="absolute w-[100vw] h-[100vh] z-0">
          <AnimatedBackground />
        </div>
        <div className="absolute w-[100vw] h-[100vh] overflow-hidden top-0">
          <div className="fixed right-3 h-full flex items-center z-20">
            <Navbar />
          </div>
          <div className={`w-full max-w-[1200px] mx-auto flex flex-col relative transition-transform self-center duration-[2s] delay-1000 custom-translate-${currentPageIndex}`}>
            {children.map((page) => (
              <div
                key={page.key}
                className={`h-[100vh] overflow-x-auto scroll-container w-full py-5 transition-all duration-[2s] ${isMoving ? "custom-shadow scale-75" : ""}`}
              >
                {page}
              </div>
            ))}
          </div>

        </div>
      </div>
    </CurrentPageContext.Provider>
  )
}

export default Layout