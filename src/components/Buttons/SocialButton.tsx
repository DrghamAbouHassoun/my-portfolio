import ReactVisibilitySensor from "react-visibility-sensor";

interface SocialButtonProps {
  icon: JSX.Element | string;
  link: string
}

const SocialButton = ({ icon, link }: SocialButtonProps) => {
  return (
    <ReactVisibilitySensor>
      {({ isVisible }: { isVisible: boolean }) => (
        <a
          href={link}
          className={`w-[60px] h-[60px] flex justify-center items-center rounded-full border border-gray-500 text-xl hover:text-primary-200 transition-transform duration-500 ${isVisible ? "scale-100": "scale-[0.1]"}`}
        >
          {icon}
        </a>
      )}
    </ReactVisibilitySensor>

  )
}

export default SocialButton