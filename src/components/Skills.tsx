interface Props {
  title?: string;
  skills: string[];
}

const Skills = ({ title, skills }: Props) => {
  return (
    <div className="flex gap-2 md:items-center">
      {title && <h4 className="w-[115px] font-semibold">{title}:</h4>}
      <div className="flex flex-1 flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-block rounded-md bg-red-500 px-2 py-1 text-sm font-semibold text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
