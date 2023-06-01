import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface Props {
  project: {
    title: string;
    description: string;
    link: string | null;
    git: string | null;
    image: string | null;
  }
}

const ProjectCard = ({project}: Props) => {
  return (
    <div className="bg-white shadow-sm rounded-md p-5 transition hover:-translate-y-2 hover:shadow-md">
      <h3 className="font-bold text-lg">{project.title}</h3>
      <p className="text-justify mt-1 text-sm">
        {project.description}
      </p>
      <div className="mt-3 flex gap-2">
        {project.git && (
          <a href={project.git} className="inline-flex bg-red-400 text-white p-2 rounded-sm">
            <FontAwesomeIcon icon={faGit} fixedWidth />
          </a>
        )}
        {project.link && (
          <a href={project.link} className="inline-flex bg-gray-100 text-red-400 p-2 rounded-sm">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} fixedWidth />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;