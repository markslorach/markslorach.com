import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../components/RichTextComponents";
import { notFound } from "next/navigation";

// Components
import ImageCarousel from "./ImageCarousel";

export const revalidate = 0;

export default async function Project({ params }) {
  const slug = params.project;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <figure className="mb-16">
        <ImageCarousel images={project.images} />
      </figure>
      <h2 className="">{project.title}</h2>
      <PortableText value={project.content} components={RichTextComponents} />
    </main>
  );
}
