import GitHubIcon from "@mui/icons-material/GitHub";


export default function ProjectCard({ title, summary, github, image }) {
  return (
    <article className="flex gap-5 p-3 bg-white/5 rounded-lg">
      <figure className="w-full sm:w-1/2">
        <img
          src={image}
          alt={title}
          className="rounded-md"
        />
      </figure>
      <aside className="flex flex-col justify-between w-full sm:w-1/2">
        <h2 className="text-black/90 dark:text-white/90">{title}</h2>
        <p className="text-sm text-black/60 dark:text-white/70">{summary}</p>
        <div className="flex justify-end">
        <GitHubIcon />
        </div>
      </aside>
    </article>
  );
}
