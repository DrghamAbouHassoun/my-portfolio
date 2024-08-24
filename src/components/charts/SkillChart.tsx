import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

interface SkillChartProps {
  percentage: number;
  title: string;
}

const SkillChart = ({ percentage, title }: SkillChartProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <ReactVisibilitySensor>
        {({ isVisible }: { isVisible: boolean }) => (
          <>
            <div
              className="pie-chart transition-colors custom-shadow"
              style={{
                background: `conic-gradient(
                    #fff 0% ${isVisible ? percentage : 0}%,  /* Slice 1: 30% */
                    #000 ${isVisible ? percentage : 0}% 100% /* Slice 3: 50% */
                )`
              }}
            >
              <span className="percentage"><CountUp start={0} end={isVisible ? percentage : 0} suffix="%" /></span>
            </div>
            <h3 className="text-3xl">{title}</h3>
          </>
        )}

      </ReactVisibilitySensor>
    </div>
    // <h2>Skill Chart</h2>
  )
}

export default SkillChart