import { Badge } from "@/components/ui/badge";
import { Experience } from "@/types/types";
import Image from "next/image";

const ExperienceCard = ({ role }: { role: Experience }) => {
  return (
    <div className="flex gap-6 border-b py-6">
      <Image
        width={50}
        height={50}
        src={role.logo}
        alt={role.company}
        className="h-12 w-12 rounded-lg"
      />

      <div className="flex w-full flex-col">
        <div className="flex justify-between">
          <h4 className="mb-1.5 text-lg font-semibold leading-none text-neutral-800">
            {role.company}
          </h4>
          <span className="hidden text-sm leading-none text-neutral-800/60 md:inline">
            {role.date}
          </span>
        </div>

        <span className="mb-4 text-neutral-800/60">{role.title}</span>

        <p className="text-balance text-neutral-600">{role.description}</p>

        {role.technologies.length > 0 && (
          <div className="mt-5 hidden flex-wrap gap-2.5 md:flex">
            {role.technologies.map((tech, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="cursor-default bg-gray-200/50 text-neutral-800/80"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}

        <span className="mt-5 text-sm leading-none text-neutral-800/60 md:hidden">
          {role.date}
        </span>
      </div>
    </div>
  );
};

export default ExperienceCard;
