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
      setProjects(
        myProjects.slice(0, projects.length + maxShow)
      )
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="projects" className="container mx-auto px-5 py-10">
      <h2 className="text-center font-bold text-2xl mb-8"><span className="border-b-8 border-red-400 border-dotted pb-2 px-3 inline-block">My Projects</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      {projects.length < myProjects.length && (
        <div className="flex justify-center mt-7">
          <button onClick={handleShowMore} className="bg-red-500 text-white px-3 py-2 text-lg font-semibold rounded-sm transition disabled:bg-slate-300 disabled:text-slate-500 dark:disabled:bg-slate-700" disabled={isLoading}>{isLoading ? 'Loading...' : 'Show More'}</button>
        </div>
      )}
    </section>
  );
}

export default ProjectContainer;