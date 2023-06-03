import { ProjectData } from "@/types/types";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface Props {
  project: ProjectData;
}

const ProjectModal = ({ project } : Props) => {
  return (
    <div>
      {project.image && (
        <div className="max-h-[280px] overflow-hidden">
          <Image className="w-full" src={`/img/ss-project/${project.image}`} width={640} height={580} alt={project.title} />
        </div>
      )}
      <div className="flex flex-col gap-4 p-5">
        <p className="text-justify text-sm">
          {project.description}
        </p>
        <div className="border-y py-2 border-slate-100 dark:border-slate-600">
          <span className="block text-sm font-bold">Tech Used:</span>
          <div className="text-xs mt-2">
            {project.techUsed.map((tech, i) => (
              <span key={i} className={`${tech === 'more...' ? 'bg-slate-100 dark:bg-slate-600 text-red-400' : 'bg-red-400 text-white'} inline-block mb-2 mr-2 px-2 py-1 rounded-sm`}>{tech}</span>
            ))}
          </div>
        </div>
        {project.git || project.link ? (
          <div className="flex gap-2">
            {project.git && (
              <a href={project.git} className="inline-flex bg-red-400 text-white p-2 rounded-sm" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGit} fixedWidth />
              </a>
            )}
            {project.link && (
              <a href={project.link} className="inline-flex bg-slate-100 text-red-400 p-2 rounded-sm dark:bg-slate-600" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} fixedWidth />
              </a>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectModal;