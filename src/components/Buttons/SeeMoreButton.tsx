import { ButtonHTMLAttributes } from "react";
import { TfiAngleDown } from "react-icons/tfi";

interface SeeMoreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SeeMoreButton = (props: SeeMoreButtonProps) => {
  return (
    <button {...props} className={`relative flex justify-center ${props.className}`}>
      <TfiAngleDown size={42} className="shinning-text an-delay-1 absolute" />
      <TfiAngleDown size={42} className="shinning-text an-delay-2 absolute top-4" />
      {/* <TfiAngleDown size={42} className="shinning-text an-delay-2 absolute top-8" /> */}
      {/* <FaAngleDown size={24} /> */}
    </button>
  )
}

export default SeeMoreButton