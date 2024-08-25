import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Heading from "./shared/Heading";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="mb-24 mt-16">
      <div className="mb-16 space-y-2">
        <Heading>Recent Projects</Heading>
        <p className="text-lg font-light leading-normal text-neutral-800/80">
          Find more information about all my projects on{" "}
          <Link
            href="https://github.com/markslorach"
            target="_blank"
            aria-label="Mark Slorach's Github"
            className="font-semibold text-blue-400 transition-colors hover:text-blue-500"
          >
            Github
          </Link>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:-ml-[5%] md:w-[110%] md:grid-cols-2 lg:-ml-[20%] lg:w-[140%]">
        {projects
          .map((project) => <ProjectCard key={project.id} project={project} />)
          .slice(0, 4)}
      </div>
    </section>
  );
};

export default Projects;
