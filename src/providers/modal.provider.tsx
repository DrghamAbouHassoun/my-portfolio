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
  const [project, setProject] = useState<IProject | null | undefined>(null)

  const handletoggleModal = (value: boolean, id?: number) => {
    setProject(projects.find(item => item.id === id))
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
          {project ?
          <>
          <div className="p-6">
            <img
              src={`./${project.media[0].src}`}
              className="w-full h-[450px] object-cover"
            />
          </div>
          <h3 className="text-3xl text-center my-4">{project.title}</h3>
          <div>
            <ul className="list-inside list-disc">
              {project.websiteLink ?
              <li>
                Website: <a href={project.websiteLink} className="underline text-blue-500">{project.websiteLink}</a>
              </li>
              : null}
              {project.androidLink ? 
              <li>
                Android: <a href={project.androidLink} className="underline text-blue-500">{project.androidLink}</a>
              </li>: null}
              {project.iosLink ? 
              <li>
                IOS: <a href={project.iosLink} className="underline text-blue-500">{project.iosLink}</a>
              </li>: null}
            </ul>
            
          </div>
          <div className="html-content p-2" dangerouslySetInnerHTML={{ __html: project.description || "" }} />
          </> : null
          }
          
        </div>
      </div>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider