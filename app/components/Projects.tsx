import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Heading from "./shared/Heading";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  return (
    <section className="mb-24 mt-16 lg:mb-20">
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

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-5 md:-ml-[5%] md:w-[110%] md:grid-cols-2 lg:-ml-[20%] lg:hidden lg:w-[140%]">
        {projects
          .map((project) => <ProjectCard key={project.id} project={project} />)
          .slice(0, 4)}
      </div>

      {/* Project Cards Carousel */}
      <div className="hidden lg:-ml-[20%] lg:block lg:w-[140%]">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {projects
              .map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pb-4 md:basis-1/2 lg:basis-1/2"
                >
                  <ProjectCard project={project} />
                </CarouselItem>
              ))
              .slice(0, 4)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
