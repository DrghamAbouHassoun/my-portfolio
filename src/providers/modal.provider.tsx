import { createContext, useState } from "react";
import projects from "../assets/data/projects.json";
import { IoClose } from "react-icons/io5";

interface InitialState {
  toggleModal: boolean;
  projectId: number;
  handletoggleModal: (value: boolean, id?: number) => void;
}

const initialState: InitialState = {
  toggleModal: false,
  projectId: -1,
  handletoggleModal: () => { }
}

export const ModalContext = createContext<InitialState>(initialState)

interface ModalProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(0);

  const handletoggleModal = (value: boolean, id?: number) => {
    setCurrentId(id || 0);
    setToggle(value);
  }

  return (
    <ModalContext.Provider value={{ toggleModal: toggle, projectId: 0, handletoggleModal }}>
      <div className={`bg-[#000a] w-[100vw] h-[100vh] flex justify-center items-center absolute z-50 ${toggle ? "visible modal-animation" : "hidden"}`} >
        <div className={`bg-black p-3 rounded w-full max-w-[800px] max-h-[90%] overflow-y-scroll scroll-container`}>
          <div className="flex p-2 flex-row-reverse">
            <button
              className="border-none bg-none text-3xl cursor-pointer mb-4"
              onClick={() => handletoggleModal(false)}
            >
              <IoClose />
            </button>
          </div>
          <div className="p-6">
            <img
              src={`/my-portfolio/public/${projects.find((item) => item.id === currentId)?.media[0].src}`}
              className="w-full h-[450px] object-cover"
            />
          </div>
          <h3 className="text-3xl text-center my-4">{projects.find((item) => item.id === currentId)?.title}</h3>
          <div className="html-content" dangerouslySetInnerHTML={{ __html: projects.find((item) => item.id === currentId)?.description || "" }} />
        </div>
      </div>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider