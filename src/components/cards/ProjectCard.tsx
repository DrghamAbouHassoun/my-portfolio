
interface ProjectCardProps {
  title: string;
  subtitle: string;
  mainImageSrc: string;
  mainImageAlt: string;
}

const ProjectCard = ({
  title,
  subtitle,
  mainImageAlt,
  mainImageSrc,
}: ProjectCardProps) => {
  return (
    <div className="flex-1 p-5 border border-gray-500 rounded-md ">
      <div className="relative rounded-md overflow-hidden">
        <div className="bg-[#0005] absolute w-full h-full z-10 top-0"></div>
        <img src={mainImageSrc} alt={mainImageAlt} className="w-full h-[200px] object-cover" />
      </div>
      <div className="my-5">
        <h3 className="text-2xl mb-3 text-primary-200">{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default ProjectCard