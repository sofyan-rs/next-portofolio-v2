import { ProjectData } from "@/types/types";
import { ExternalLinkIcon, FolderGit2Icon } from "lucide-react";
import Image from "next/image";

interface Props {
  project: ProjectData;
}

const ProjectModal = ({ project }: Props) => {
  return (
    <div>
      {project.image && (
        <div className="max-h-[250px] overflow-hidden">
          <Image
            className="w-full"
            src={`/img/ss-project/${project.image}`}
            width={640}
            height={580}
            alt={project.title}
          />
        </div>
      )}
      <div className="flex flex-col gap-4 p-5">
        <p className="text-justify text-sm">{project.description}</p>
        <div className="border-y border-slate-100 py-2 dark:border-slate-600">
          <span className="block text-sm font-bold">Tech Used:</span>
          <div className="mt-2 text-xs">
            {project.techUsed.map((tech, i) => (
              <span
                key={i}
                className={`${
                  tech === "more..."
                    ? "bg-slate-100 text-red-400 dark:bg-slate-600"
                    : "bg-red-400 text-white"
                } mb-2 mr-2 inline-block rounded-sm px-2 py-1`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {project.git || project.link ? (
          <div className="flex gap-2">
            {project.git && (
              <a
                href={project.git}
                className="inline-flex rounded-sm bg-red-400 px-2 py-1.5 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FolderGit2Icon size={20} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                className="inline-flex rounded-sm bg-slate-100 px-2 py-1.5 text-red-400 dark:bg-slate-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLinkIcon size={20} />
              </a>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectModal;
