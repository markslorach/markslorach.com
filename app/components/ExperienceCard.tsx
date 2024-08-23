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
          <span className="text-sm hidden md:inline leading-none text-neutral-800/60">
            {role.date}
          </span>
        </div>
        <span className="mb-4 text-neutral-800/60">{role.title}</span>
        <p className="text-balance text-neutral-800/80">{role.description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
