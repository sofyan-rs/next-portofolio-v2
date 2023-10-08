"use client";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { ProjectData } from "@/types/types";
import ProjectModal from "./ProjectModal";
import {
  ExternalLinkIcon,
  FolderGit2Icon,
  MoreHorizontalIcon,
} from "lucide-react";

interface Props {
  project: ProjectData;
}

const ProjectCard = ({ project }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="flex flex-col justify-between rounded-md bg-white p-5 shadow-sm transition hover:-translate-y-2 hover:shadow-md dark:bg-slate-700">
        <div>
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p className="mt-1 text-justify text-sm">{project.description}</p>
        </div>
        <div className="mt-3 flex justify-between gap-2">
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
          <button
            onClick={handleShowModal}
            className="inline-flex rounded-sm bg-slate-100 px-2 py-1.5 text-red-400 dark:bg-slate-600"
          >
            <MoreHorizontalIcon size={20} />
          </button>
        </div>
      </div>
      <Modal
        title={project.title}
        showModal={showModal}
        handleShow={handleShowModal}
      >
        <ProjectModal project={project} />
      </Modal>
    </>
  );
};

export default ProjectCard;
