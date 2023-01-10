import { PageContent } from "../components/PageContent";
import { PageTitle } from "../components/PageTitle";
import { projects } from "../data";

export const Projects = () => {
  return (
    <PageContent>
      <PageTitle title="Projects" />

      <div className="flex mt-2 flex-wrap gap-3">
        {projects.map((project) => (
          <div
            className={`bg-[#F6F5F8] max-w-[400px] p-4 rounded-xl flex flex-col overflow-hidden`}
          >
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <h3 className="font-semibold text-sm mt-1 mb-2 opacity-70">
              {project.category}
            </h3>
            <p className="text-sm whitespace-pre-line">{project.description}</p>
            <div className="slider flex gap-2 ">
              {project.images.map((image) => (
                <img className="max-w-[250px]" src={image} alt={image} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageContent>
  );
};
