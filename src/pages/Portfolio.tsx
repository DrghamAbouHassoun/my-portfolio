import projects from '../assets/data/projects.json';
import ProjectCard from '../components/cards/ProjectCard';


const Portfolio = () => {
  return (
    <div className="flex justify-center items-center h-full flex-col p-10 mt-[300vh]">
      <h1 className="text-5xl font-bold mb-16">Portfolio</h1>
      <div className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {projects.map((item) => (
          <ProjectCard 
            id={item.id}
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            mainImageAlt={item.media[0].alt}
            mainImageSrc={`./${item.media[0].src}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio