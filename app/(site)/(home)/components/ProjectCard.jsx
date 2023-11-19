"use client";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

export default function ProjectCard({ title, summary, github, image, slug }) {
  return (
    <Link href={`/projects/${slug}`}>
      <article className="project-card group">
        <figure className="project-card-image-container">
          <img src={image} alt={title} className="project-card-image" />
        </figure>
        <aside className="project-card-info-container">
          <h2 className="project-card-title">{title}</h2>
          <p className="project-card-summary">{summary}</p>
          <div className="flex justify-end">
            <button
              className="project-github-icon"
              onClick={(e) => {
                e.preventDefault();
                window.open(github, "_blank");
              }}
            >
              <GitHubIcon />
            </button>
          </div>
        </aside>
      </article>
    </Link>
  );
}
