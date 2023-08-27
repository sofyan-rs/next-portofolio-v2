import { aboutMe, mySkills, toolsIUse } from "@/data/data";
import Skills from "./Skills";

const About = () => {
  return (
    <section
      id="about"
      className="border-y-[8px] border-dashed border-slate-100 bg-red-400 dark:border-slate-800"
    >
      <div className="container mx-auto px-5 py-8">
        <h2 className="mb-2 text-2xl font-bold">About Me</h2>
        <p className="text-justify">{aboutMe}</p>
        <div className="mt-5 border-t-4 border-dashed border-red-500 pt-5">
          <h3 className="mb-3 text-xl font-bold">Skills</h3>
          <div className="flex flex-col gap-3">
            <Skills title="Frontend" skills={mySkills.frontend} />
            <Skills title="Backend" skills={mySkills.backend} />
            <Skills title="Mobile Dev" skills={mySkills.mobile} />
            <Skills title="Others" skills={mySkills.others} />
          </div>
        </div>
        <div className="mt-5 border-t-4 border-dashed border-red-500 pt-5">
          <h3 className="mb-3 text-xl font-bold">Tools I Use</h3>
          <Skills skills={toolsIUse} />
        </div>
      </div>
    </section>
  );
};

export default About;
