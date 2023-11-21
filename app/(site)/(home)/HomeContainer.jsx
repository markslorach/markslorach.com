import { getProjects } from "@/sanity/sanity-utils";
import { Suspense } from "react";

// Components
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import Experience from "./components/Experience";
import Loading from "@/app/loading";

export default async function HomeContainer() {
  
  const projects = await getProjects();

  return (
    <>
      <Hero />
      <h2 className="mb-6">Recent Projects</h2>
      <Suspense fallback={<Loading/>}>
      <ProjectList projects={projects.slice(0, 3)} />
      </Suspense>
      <Experience />
    </>
  );
}
