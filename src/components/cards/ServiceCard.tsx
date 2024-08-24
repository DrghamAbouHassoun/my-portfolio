
interface ServiceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="p-5 rounded flex justify-center items-center flex-col gap-5 text-center">
      <div className="border-2 border-gray-500 w-[80px] h-[80px] flex justify-center items-center rounded-full text-3xl text-primary-200">{icon}</div>
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

export default ServiceCard