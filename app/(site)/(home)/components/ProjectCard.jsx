"use client";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectCard({ title, summary, github, image }) {
  return (
    <article className="flex gap-5 p-3 flex-wrap sm:flex-nowrap bg-white/5 hover:bg-white/10 transition-all duration-300 ease-in-out rounded-lg shadow-sm">
      <figure className="w-full sm:w-1/2">
        <img src={image} alt={title} className="rounded-md" />
      </figure>
      
      <aside className="flex flex-col justify-between w-full sm:w-1/2 tracking-wide leading-none">
        <h2 className="text-black/90 dark:text-white/90 mb-3 sm:mb-0">{title}</h2>
        <p className="text-sm font-light text-black/60 dark:text-white/70 mb-3 sm:mb-0">{summary}</p>
        <div className="flex justify-end">
          <GitHubIcon
            onClick={(e) => {
              e.preventDefault();
              window.open(github, "_blank");
            }}
            className="cursor-pointer text-white/70 hover:scale-105 transition duration-300 ease-in-out text-secondary hover:text-white/90"
          />
        </div>
      </aside>
    </article>
  );
}
