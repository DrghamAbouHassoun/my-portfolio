import ResumeData from "../assets/data/resume.json";
import SkillsBar from "../components/bars/SkillsBar";
import ResumeTimeline from "../components/timeline/ResumeTimeline";

const Resume = () => {
  return (
    <div className="flex justify-center items-center h-full flex-col p-10 mt-[270vh]">
      <h1 className="text-5xl font-bold mb-16">Resume:</h1>
      <div className="flex gap-10 w-full flex-wrap">
        <div className="flex-1">
          <ResumeTimeline
            mainTitle={ResumeData.experience.mainTitle}
            sections={ResumeData.experience.data.map((item) => ({
              ...item,
              to: item.to === "present" ? new Date() : new Date(item.to),
              from: new Date(item.from),
              description: (
                <ul className="list-disc p-2">
                  {item.description.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                  ))}
                </ul>
              )
            }))}
          />
        </div>
        <div className="flex-1">
          <ResumeTimeline
            mainTitle={ResumeData.education.mainTitle}
            sections={ResumeData.education.data.map((item) => ({
              ...item,
              to: item.to === "present" ? new Date() : new Date(item.to),
              from: new Date(item.from),
              description: (
                <ul className="list-disc p-2">
                  {item.description.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                  ))}
                </ul>
              )
            }))}
          />
        </div>
      </div>
      <div className="my-10 w-full">
        <h2 className="text-3xl mb-20">My Skills:</h2>
        <div className="grid grid-cols-2 gap-5 pb-10">
          {ResumeData.skills.map(item => (
            <SkillsBar
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </div>
      <div className="my-10 w-full">
        <h2 className="text-3xl mb-20">Languages:</h2>
        <div className="grid grid-cols-2 gap-5 pb-10">
          {ResumeData.languages.map(item => (
            <SkillsBar
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resume