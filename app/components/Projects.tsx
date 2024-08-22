import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Heading from "./shared/Heading";

const Projects = () => {
  return (
    <section className="my-16">
      <div className="mb-16 space-y-1">
        <Heading>Recent Projects</Heading>
        <p className="text-xl font-light leading-normal text-neutral-800/80 md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:-ml-[5%] md:w-[110%] md:grid-cols-2 lg:-ml-[20%] lg:w-[140%]">
        {projects
          .map((project, idx) => <ProjectCard key={idx} project={project} />)
          .slice(0, 4)}
      </div>
    </section>
  );
};

export default Projects;
