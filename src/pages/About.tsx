import common from "../assets/data/common.json";
import StateCard from "../components/cards/StateCard";
import ServiceCard from "../components/cards/ServiceCard";
import SkillsBar from "../components/bars/SkillsBar";
import { services, skills } from "../assets/data/technical";

const About = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="h-full p-4 pt-[200px] pb-[100px]">
      <h2 className="text-5xl font-bold uppercase w-full text-center p-3 mb-10">About <span>Me</span></h2>
      <div className="flex my-10 flex-wrap gap-2">
        <div className="flex-1">
          <h2 className="text-xl font-bold flex-1">Personal Informations:</h2>
          <div className="grid grid-cols-2 gap-5 my-10">
            <p><span className="text-gray-400">Firstname:</span> {common.firstName}</p>
            <p><span className="text-gray-400">Lastname:</span> {common.lastName}</p>
            <p><span className="text-gray-400">Age:</span> {year - common.yearOfBirth}</p>
            <p><span className="text-gray-400">Nationality:</span> {common.nationality}</p>
            <p><span className="text-gray-400">Address:</span> {common.address}</p>
            <p><span className="text-gray-400">Phone:</span> {common.phone}</p>
            <p><span className="text-gray-400">Email:</span> {common.email}</p>
            <p><span className="text-gray-400">Languages:</span> {common.languages.join(", ")}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 flex-1 items-center justify-center">
          {common.accomplishments.map(item => (
            <div key={item.title} className="flex-1 min-w-[250px] max-w-[250px]">
              <StateCard
                number={item.number}
                title={item.title}
                prefix={item.prefix}
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="text-gray-600 border-gray-500 my-20" />
      <div className="my-10">
        <h2 className="text-3xl mb-20">My Service:</h2>
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
        <h2 className="text-3xl mb-20">My Skills:</h2>
        <div className="grid grid-cols-2 gap-5 pb-10">
          {skills.map(item => (
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

export default About