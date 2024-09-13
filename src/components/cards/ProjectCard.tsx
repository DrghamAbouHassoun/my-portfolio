import { useContext } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { ModalContext } from "../../providers/modal.provider";

interface ProjectCardProps {
  id: number;
  title: string;
  subtitle: string;
  mainImageSrc: string;
  mainImageAlt: string;
}

const ProjectCard = ({
  id,
  title,
  subtitle,
  mainImageAlt,
  mainImageSrc,
}: ProjectCardProps) => {
  const { handletoggleModal } = useContext(ModalContext);

  return (
    <ReactVisibilitySensor
      partialVisibility
    >
      {({ isVisible }: { isVisible: boolean }) => (
        <div onClick={() => handletoggleModal(true, id)} className={`flex-1 p-5 border border-gray-500 rounded-md transition-all cursor-pointer duration-[2s] delay-200 ${isVisible ? "scale-100 opacity-100" : "scale-[0.2] opacity-0"}`}>
          <div className="relative rounded-md overflow-hidden">
            <div className="bg-[#0002] absolute w-full h-full z-10 top-0"></div>
            <img src={mainImageSrc} alt={mainImageAlt} className="w-full h-[200px] object-cover" />
          </div>
          <div className="my-5">
            <h3 className="text-2xl mb-3 text-primary-200">{title}</h3>
            <p>{subtitle}</p>
          </div>
        </div>
      )}

    </ReactVisibilitySensor>
  )
}

export default ProjectCard