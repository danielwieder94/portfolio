import React, { useState } from "react";
import { Carousel } from "flowbite-react";
import myCustomTheme from "../../theme/Theme";
import { skillCategories } from "../../utils/skills/skillsList";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className=" w-[85%] fade-out ">
      <div className="mx-auto py-32 sm:py-48 lg:py-56 ">
        <h2 className="font-bold text-center text-slate-300">SKILLS</h2>
        <div className="my-4 h-[350px]">
          <Carousel slide={false} theme={myCustomTheme}>
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="h-full flex flex-col items-center justify-center"
              >
                <h3 className="text-lg font-bold text-slate-300/60 mb-8">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-10">
                  {category.icons.map((icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      onMouseEnter={() => setHoveredSkill(icon.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="skills relative"
                    >
                      <img
                        src={icon.src}
                        alt={icon.name}
                        className="h-16 w-16"
                      />
                      {/* absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800/50 text-slate-300/75 font-mono px-2 py-1 rounded */}
                      {hoveredSkill === icon.name && (
                        <div className="tooltip">{icon.name}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Skills;
