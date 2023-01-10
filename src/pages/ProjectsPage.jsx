import { PageContent } from "../components/PageContent";
import { PageTitle } from "../components/PageTitle";
import { CardContainer } from "../components/containers/CardContainer";
import { SwiperSlider } from "../components/SwiperSlider";
import { projects } from "../data";

export const ProjectsPage = () => {
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
            <p className="text-base whitespace-pre-line">
              {project.description}
            </p>
            <a
              className="mt-2 text-sm text-[#ED1C24] underline underline-offset-4"
              href={project.url}
            >
              Посилання
            </a>
            <SwiperSlider imagesArray={project.images} />
          </CardContainer>
        ))}
      </div>
    </PageContent>
  );
};
