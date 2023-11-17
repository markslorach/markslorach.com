import { getProjects } from "@/sanity/sanity-utils";

// Components
import Hero from "./components/Hero";
import ContactLinks from "./components/ContactLinks";
import ProjectList from "./components/ProjectList";

export default async function HomeContainer() {
  const projects = await getProjects();

  const recentProjects = "Recent Projects";

  return (
    <>
      <Hero />
      <ContactLinks />
      <ProjectList projects={projects.slice(0, 3)} recentProjects={recentProjects}/>
    </>
  );
}
