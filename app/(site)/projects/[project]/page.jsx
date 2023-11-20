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
      <figure className="mb-4">
        <ImageCarousel images={project.images} />
      </figure>

      <div className="flex flex-wrap gap-4 text-white/50 text-xs tracking-wide leading-none font-mono mb-16">
        {project.techStack.map((tech, index) => (
          <p key={index}>{tech}</p>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <h2 className="">{project.title}</h2>
        <Link
          href={project.github}
          target="_blank"
          className="flex items-center gap-2"
        >
        <GitHubIcon fontSize="medium" className="text-white/90" />
      </Link>
      </div>

      <PortableText value={project.content} components={RichTextComponents} />
    </main>
  );
}
