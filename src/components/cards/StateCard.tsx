import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

interface StateCardProps {
  number: number;
  prefix?: string;
  title: string;
}

const StateCard = ({ number, title, prefix = "" }: StateCardProps) => {
  return (
    <div className="border border-gray-400 rounded p-6">
      <ReactVisibilitySensor>
        {({ isVisible }: { isVisible: boolean }) => (
          <>
            <CountUp start={0} end={isVisible ? number : 0} prefix={prefix} className="text-4xl font-bold text-primary-200" />
            <h3 className="mt-3">{title}</h3>
          </>
        )}

      </ReactVisibilitySensor>
    </div>
  )
}

export default StateCard