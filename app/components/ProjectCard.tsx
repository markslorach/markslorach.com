import { Project } from "@/types/types";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      href={project.href ? project.href : project.github}
      target="_blank"
      aria-label={project.aria}
      className="block space-y-5 rounded-lg bg-gray-100 p-3 shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-200/60"
    >
      <AspectRatio className="rounded-lg" ratio={16 / 9}>
        <Image
          src={project.image}
          alt={`${project.title} preview image`}
          width={960}
          height={540}
          priority
          className="rounded-lg border-2 border-gray-200/20"
        />
      </AspectRatio>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold leading-none text-neutral-800">
          {project.title}
        </h3>

        <span className="block text-neutral-800/80">{project.description}</span>
      </div>
    </Link>
  );
};

export default ProjectCard;
