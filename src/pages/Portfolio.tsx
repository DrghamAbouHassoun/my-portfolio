import projects from '../assets/data/projects.json';
import ProjectCard from '../components/cards/ProjectCard';


const Portfolio = () => {
  return (
    <div className="flex justify-center items-center h-full flex-col p-10 mt-[500px]">
      <h1 className="text-5xl font-bold mb-16">Portfolio</h1>
      <div className="my-12 grid grid-cols-3 gap-5">
        {projects.map((item, index) => (
          <ProjectCard 
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            mainImageAlt={item.media[0].alt}
            mainImageSrc={`/my-portfolio/public/${item.media[0].src}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio