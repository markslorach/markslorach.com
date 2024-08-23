import { Experience } from "@/types/types";
import Image from "next/image";

const ExperienceCard = ({ role }: { role: Experience }) => {
  return (
    <div className="flex gap-6 py-6 border-b">
      <Image
        width={50}
        height={50}
        src={role.logo}
        alt={role.company}
        className="h-12 w-12 rounded-lg"
      />
      <div className="flex w-full flex-col">
        <h4 className="text-lg font-semibold leading-none mb-1.5 text-neutral-800">{role.company}</h4>
        <span className="mb-4 text-neutral-800/60">{role.title}</span>
        <p className="text-neutral-800/80 text-balance">{role.description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
