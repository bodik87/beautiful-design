import { useState } from "react";
import { CardContainer } from "../components/containers/CardContainer";
import { PageContent } from "../components/PageContent";
import { PageTitle } from "../components/PageTitle";
import { SwiperSlider } from "../components/SwiperSlider";
import { ReactToggleFilter } from "../components/ui/ReactToggleFilter";
import { filters, projects } from "../data";

export const ReactPage = () => {
  const reactProjects = projects.filter(
    (project) => project.category === "React"
  );
  const [filteredArray, setFilteredArray] = useState(reactProjects);

  const getFidteredProjects = (text, array) => {
    const filteredData = array.filter((el) => {
      if (text === "All") return array;
      else return el.type?.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredArray(filteredData);
  };

  return (
    <PageContent>
      <div className="flex flex-col gap-4 mb-4">
        <PageTitle title="React projects & components" />
        <ReactToggleFilter
          filtersArray={filters}
          projectsArray={reactProjects}
          onClick={getFidteredProjects}
        />
      </div>
      <div className="flex mt-2 mr-2 flex-wrap gap-2">
        {filteredArray.map((project) => (
          <CardContainer key={project.id}>
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <h3 className="font-semibold text-sm mb-2 opacity-70">
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
