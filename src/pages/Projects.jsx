import { PageContent } from "../components/PageContent";
import { PageTitle } from "../components/PageTitle";
import { Carousel } from "../components/Carousel";
import { CardContainer } from "../components/containers/CardContainer";
import { projects } from "../data";

export const Projects = () => {
  return (
    <PageContent>
      <PageTitle title="Projects" />

      <div className="flex mt-2 mr-2 flex-wrap gap-3">
        {projects.map((project) => (
          <CardContainer key={project.id}>
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <h3 className="font-semibold text-sm mt-1 mb-2 opacity-70">
              {project.category}
            </h3>
            <p className="text-sm whitespace-pre-line">{project.description}</p>
            <div className="slider flex gap-2 ">
              <Carousel imagesArray={project.images} />
            </div>
          </CardContainer>
        ))}
      </div>
    </PageContent>
  );
};
