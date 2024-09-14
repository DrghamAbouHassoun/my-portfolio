import projects from '../assets/data/projects.json';
import ProjectCard from '../components/cards/ProjectCard';
import PageContainer from '../layout/PageContainer';


const Portfolio = () => {
  return (
    <PageContainer 
      pageTitle='Portfolio'
      pageSubtitle='A Collection of My Most Notable Works and Achievements'
    >
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
    </PageContainer>
  )
}

export default Portfolio