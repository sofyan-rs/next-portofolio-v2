"use client";
import { myProjects } from "@/data/data";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const ProjectContainer = () => {
  const maxShow = 6;
  const [projects, setProjects] = useState(myProjects.slice(0, maxShow));
  const [isLoading, setIsLoading] = useState(false);
  const handleShowMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setProjects(myProjects.slice(0, projects.length + maxShow));
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="projects" className="container mx-auto px-5 py-10">
      <h2 className="mb-8 text-center text-2xl font-bold">
        <span className="inline-block border-b-8 border-dotted border-red-400 px-3 pb-2">
          My Projects
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      {projects.length < myProjects.length && (
        <div className="mt-7 flex justify-center">
          <button
            onClick={handleShowMore}
            className="rounded-sm bg-red-500 px-3 py-2 text-lg font-semibold text-white transition disabled:bg-slate-300 disabled:text-slate-500 dark:disabled:bg-slate-700"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectContainer;
