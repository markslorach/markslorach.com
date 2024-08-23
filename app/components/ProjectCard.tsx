import { Project } from "@/types/types";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      href={project.href}
      target="_blank"
      aria-label={project.aria}
      className="space-y-5 rounded-lg bg-gray-100 p-3 shadow-sm transition-all duration-200 ease-in-out hover:scale-[101.5%] hover:bg-gray-200/80"
    >
      <AspectRatio
        className="rounded-lg border-2 border-gray-200/20"
        ratio={16 / 9}
      >
        <Image
          src={project.image}
          alt={`${project.title} preview image`}
          width={960}
          height={540}
          priority
          quality={80}
          className="rounded-lg"
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
