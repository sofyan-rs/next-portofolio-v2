import { aboutMe, mySkills } from "@/data/data";

const About = () => {
  return (
    <section id="about" className="bg-red-400 border-y-[8px] border-dashed border-gray-100">
      <div className="container mx-auto px-5 py-8">
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p className="text-justify">
          {aboutMe}
        </p>
        <div className="border-t-4 border-red-500 border-dashed mt-5 pt-5">
          <h3 className="text-xl font-bold mb-3">Skills</h3>
          {mySkills.map((skill) => (
            <span key={skill} className="inline-block bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold mr-2 mb-2">{skill}</span>
          ))}
        </div>
      </div>
    </section>                                        
  );
}

export default About;