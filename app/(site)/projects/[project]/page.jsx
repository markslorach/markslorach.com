import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/link";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Components
import ImageCarousel from "./ImageCarousel";
import { RichTextComponents } from "../../components/RichTextComponents";

export const revalidate = 0;

export default async function Project({ params }) {
  const slug = params.project;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <div className="flex gap-3 justify-between items-center mb-5">
        <h2>{project.title}</h2>
        <button className="text-white/70 hover:text-white/90 hover:scale-105 transition-all duration-300 ease-in-out">
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2"
          >
            <GitHubIcon fontSize="medium" />
          </Link>
        </button>
      </div>
      <figure className="mb-16">
        <ImageCarousel images={project.images} />
      </figure>
      <div className="mb-16">
        <h2 className="mb-5">Tech Stack</h2>
        <div className="flex flex-wrap gap-4 text-white/50 text-sm tracking-wide leading-none">
          {project.techStack.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
      </div>
      <h2>Project Info</h2>
      <PortableText value={project.content} components={RichTextComponents} />
    </main>
  );
}
