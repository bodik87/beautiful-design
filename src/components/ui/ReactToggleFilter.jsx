import { useState } from "react";
import { filters } from "../../data";
import { ToggleFilterContainer } from "../containers/ToggleFilterContainer";

export const ReactToggleFilter = () => {
  const [activeFilter, setActiveFilter] = useState(1);
  const handleClick = (i) => setActiveFilter(i);
  return (
    <ToggleFilterContainer
      filtersArray={filters}
      handleClick={handleClick}
      activeFilterIndex={activeFilter}
    />
  );
};
