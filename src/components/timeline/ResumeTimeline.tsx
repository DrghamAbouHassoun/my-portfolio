import { Timeline } from "flowbite-react";
import dayjs from 'dayjs'
import MoveTopAnimation from "../animation/MoveTopAnimation";
import MoveSideAnimation from "../animation/MoveSideAnimation";

interface ISection {
  title: string;
  institution: string;
  from: Date;
  to: Date;
  description: string | JSX.Element | JSX.Element[] | null;
  location: string;
}

interface ResumeTimelineProps {
  mainTitle: string;
  sections: ISection[]
}

const ResumeTimeline = ({ mainTitle, sections }: ResumeTimelineProps) => {
  return (
    <div>
      <MoveTopAnimation>
      <h3 className="text-2xl mb-6">{mainTitle}</h3>
      </MoveTopAnimation>
      <div className="p-4">
        <Timeline>
          {sections.map((item, index) => (
            <Timeline.Item key={index}>
              <Timeline.Point />
              <Timeline.Content>
                <p>
                  <Timeline.Time>{dayjs(item.from).format("MMMM YY")}</Timeline.Time> - <Timeline.Time>{dayjs(item.to).format("MMMM YY")}</Timeline.Time>
                </p>
                <MoveSideAnimation>
                <Timeline.Title className="text-white">{item.title}</Timeline.Title>
                </MoveSideAnimation>
                <Timeline.Content className="text-primary-200">{item.institution}</Timeline.Content>
                <Timeline.Body className="text-gray-400">
                  {item.description}
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          ))}
          
        </Timeline>
      </div>
    </div>
  )
}

export default ResumeTimeline