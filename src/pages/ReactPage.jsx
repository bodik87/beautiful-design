import { PageContent } from "../components/PageContent";
import { PageTitle } from "../components/PageTitle";
import { ReactToggleFilter } from "../components/ui/ReactToggleFilter";

export const ReactPage = () => {
  return (
    <PageContent>
      <div className="flex flex-col gap-4 mb-4">
        <PageTitle title="React projects" />
        <ReactToggleFilter />
      </div>
    </PageContent>
  );
};
