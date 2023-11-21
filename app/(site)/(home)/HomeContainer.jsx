import { getProjects } from "@/sanity/sanity-utils";
import { Suspense } from "react";

// Components
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import Experience from "./components/Experience";
import Skeleton from "./components/Skeleton";

export default async function HomeContainer() {

  const projects = await getProjects();

  return (
    <>
      <Hero />
      <h2 className="mb-6">Recent Projects</h2>
      <Suspense fallback={<Skeleton/>}>
      <ProjectList projects={projects.slice(0, 3)} />
      </Suspense>
      <Experience />
    </>
  );
}
