import ProjectDetails from "@/app/components/projectDetails/projectDetails";
import { Suspense } from "react";

const ProjectPage = () => {
  return (
    <Suspense>
      <ProjectDetails />
    </Suspense>
  );
};

export default ProjectPage;
