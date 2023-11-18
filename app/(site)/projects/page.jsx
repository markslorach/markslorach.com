import { getProjects } from "@/sanity/sanity-utils";
import ProjectList from "../(home)/components/ProjectList";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <h2 className="mb-6">Projects</h2>
      <ProjectList projects={projects} />
    </>
  );
}
