import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

interface SkillsBar {
  title: string;
  percentage: number;
}

const SkillsBar = ({ title, percentage }: SkillsBar) => {
  return (
    <div>
      <h3>{title}</h3>
      <ReactVisibilitySensor
        partialVisibility
      >
        {({isVisible}: { isVisible: boolean }) => (
          <div className="flex gap-5 items-center">
          
          <div className="w-full h-[8px] rounded-full custom-shadow-2 overflow-hidden">
            <div 
              className={` bg-white h-full rounded-full transition-transform duration-500 ${isVisible ? "translate-x-0": "translate-x-[-100%]"}`}
              style={{
                width: `${percentage}%`
              }}
            ></div>
          </div>
          <CountUp end={isVisible ? percentage: 0} suffix="%" />
        </div>
        )}
      
      </ReactVisibilitySensor>
    </div>
  )
}

export default SkillsBar