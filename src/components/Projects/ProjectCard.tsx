"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { ProjectData } from '@/types/types';
import ProjectModal from './ProjectModal';

interface Props {
  project: ProjectData;
}

const ProjectCard = ({ project } : Props) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <div className="bg-white flex flex-col justify-between shadow-sm rounded-md p-5 transition hover:-translate-y-2 hover:shadow-md dark:bg-slate-700">
        <div>
          <h3 className="font-bold text-lg">{project.title}</h3>
          <p className="text-justify mt-1 text-sm">
            {project.description}
          </p>
        </div>
        <div className="mt-3 flex justify-between gap-2">
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
          <button onClick={handleShowModal} className="inline-flex bg-slate-100 text-red-400 p-2 rounded-sm dark:bg-slate-600">
            <FontAwesomeIcon icon={faEllipsis} fixedWidth />
          </button>
        </div>
      </div>
      <Modal title={project.title} showModal={showModal} handleShow={handleShowModal}>
        <ProjectModal project={project} />
      </Modal>
    </>
  );
}

export default ProjectCard;