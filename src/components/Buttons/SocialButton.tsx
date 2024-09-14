import PopUpAnimation from "../animation/PopUpAnimation";

interface SocialButtonProps {
  icon: JSX.Element | string;
  link: string
}

const SocialButton = ({ icon, link }: SocialButtonProps) => {
  return (
    <PopUpAnimation>
      <a
        href={link}
        className={`w-[60px] h-[60px] flex justify-center items-center rounded-full border border-gray-500 text-xl hover:text-primary-200`}
      >
        {icon}
      </a>
    </PopUpAnimation>

  )
}

export default SocialButton