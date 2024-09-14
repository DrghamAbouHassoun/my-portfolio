import MoveTopAnimation from "../animation/MoveTopAnimation";
import PopUpAnimation from "../animation/PopUpAnimation";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="p-5 rounded flex justify-center items-center flex-col gap-5 text-center">
      <PopUpAnimation><div className="border-2 border-gray-500 w-[80px] h-[80px] flex justify-center items-center rounded-full text-3xl text-primary-200">{icon}</div></PopUpAnimation>
      <MoveTopAnimation><h3 className="font-bold text-2xl">{title}</h3></MoveTopAnimation>
      <MoveTopAnimation><p className="text-gray-300">{description}</p></MoveTopAnimation>
    </div>
  )
}

export default ServiceCard