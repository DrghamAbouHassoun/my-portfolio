import common from "../assets/data/common.json";
// import StateCard from "../components/cards/StateCard";
import ServiceCard from "../components/cards/ServiceCard";
import SkillsBar from "../components/bars/SkillsBar";
import { services, skills } from "../assets/data/technical";
import PageContainer from "../layout/PageContainer";
import MoveTopAnimation from "../components/animation/MoveTopAnimation";
import MoveSideAnimation from "../components/animation/MoveSideAnimation";

const About = () => {
  const today = new Date();
  const year = today.getFullYear();


  return (
    <PageContainer
      pageTitle="About Me"
      pageSubtitle="Discover My Path, Passion, and Professional Journey"
    >
      <div className="flex my-10 flex-wrap gap-2">
        <div className="flex-1">
          <MoveTopAnimation>
            <h2 className="text-xl font-bold flex-1">Personal Informations:</h2>
          </MoveTopAnimation>
          <div className="grid grid-cols-2 gap-5 my-10">
            <MoveSideAnimation><p><span className="text-gray-400">Firstname:</span> {common.firstName}</p></MoveSideAnimation>
            <MoveSideAnimation><p><span className="text-gray-400">Lastname:</span> {common.lastName}</p></MoveSideAnimation>
            <MoveSideAnimation><p><span className="text-gray-400">Age:</span> {year - common.yearOfBirth}</p></MoveSideAnimation>
            <MoveSideAnimation><p><span className="text-gray-400">Nationality:</span> {common.nationality}</p></MoveSideAnimation>
            <MoveSideAnimation><p><span className="text-gray-400">Address:</span> {common.address}</p></MoveSideAnimation>
            <MoveSideAnimation><p><span className="text-gray-400">Phone:</span> {common.phone}</p></MoveSideAnimation>
            <MoveSideAnimation><p><span className="text-gray-400">Email:</span> {common.email}</p></MoveSideAnimation>
            <MoveSideAnimation><p><span className="text-gray-400">Languages:</span> {common.languages.join(", ")}</p></MoveSideAnimation>
          </div>
        </div>
        {/* <div className="flex flex-wrap gap-5 flex-1 items-center justify-center">
          {common.accomplishments.map(item => (
            <div key={item.title} className="flex-1 min-w-[250px] max-w-[250px]">
              <StateCard
                number={item.number}
                title={item.title}
                prefix={item.prefix}
              />
            </div>
          ))}
        </div> */}
      </div>
      <div>
        <MoveTopAnimation>
          <h3 className="text-lg pb-4 font-bold">Summary:</h3>
        </MoveTopAnimation>
        <MoveTopAnimation>
          <p className="pb-4">I'm a Full Stack Developer with a passion for building efficient, scalable, and user-centric web applications. With 4 years of experience in both front-end and back-end technologies, I specialize in creating seamless user experiences while ensuring robust server-side logic.</p>
        </MoveTopAnimation>

        <MoveTopAnimation>
          <h3 className="text-lg pb-4 font-bold">Key Highlights:</h3>
        </MoveTopAnimation>
        <ul className="list-disc px-4">
          <MoveTopAnimation><li className="pb-1">Proficient in: JavaScript (ES6+), React, Node.js, Express, and MongoDB.</li></MoveTopAnimation>
          <MoveTopAnimation><li className="pb-1">Front-end Expertise: Developing responsive, dynamic web interfaces using React, HTML5, CSS3, and modern UI/UX best practices.</li></MoveTopAnimation>
          <MoveTopAnimation><li className="pb-1">Back-end Mastery: Building secure, RESTful APIs with Node.js, managing databases with MongoDB and MySQL, and integrating third-party services.</li></MoveTopAnimation>
          <MoveTopAnimation><li className="pb-1">DevOps Knowledge: Experience with AWS, Docker, and CI/CD pipelines to streamline development and deployment.</li></MoveTopAnimation>
          <MoveTopAnimation><li className="pb-1">Version Control: Adept at collaborating through Git, GitHub, and handling complex codebases with ease.</li></MoveTopAnimation>
          <MoveTopAnimation><li className="pb-1">Problem Solver: Passionate about writing clean, maintainable code, and solving complex problems in creative ways.</li></MoveTopAnimation>
          <MoveTopAnimation><li className="pb-1">I'm driven by the challenge of turning ideas into reality, and I thrive in collaborative environments that encourage innovation. Let’s build something amazing together!</li></MoveTopAnimation>
        </ul>
      </div>
      <hr className="text-gray-600 border-gray-500 my-20" />
      <div className="my-10">
        <MoveTopAnimation>
        <h2 className="text-3xl mb-20">My Service:</h2>
        </MoveTopAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map(item => (
            <ServiceCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </div>
      <hr className="text-gray-600 border-gray-500 my-20" />
      <div className="my-10">
        <MoveTopAnimation>
        <h2 className="text-3xl mb-20">My Skills:</h2>
        </MoveTopAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10">
          {skills.map(item => (
            <SkillsBar
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  )
}

export default About