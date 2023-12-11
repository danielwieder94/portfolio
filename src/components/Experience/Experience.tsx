// Experience.js
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="  text-slate-300 mt-16 fade-out py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center text-slate-300">EXPERIENCE</h2>
        <p className="mt-8 max-w-2xl mx-auto text-center">
          <span className="font-bold text-lg">Fullstack Developer</span>{" "}
          <span className="font-light text-md ">
            | Traveling Company — July 2023 - Present
          </span>
          <br /> <br />
          <span>
            Leveraging extensive knowledge in front-end technologies like
            React.js, Next.js, Angular, and TypeScript, I've designed
            user-centric interfaces. Proficient in UI libraries such as Material
            UI, Bootstrap, and TailwindCSS, enhancing the aesthetics and
            usability of applications.
            <br />
            My back-end expertise includes Node.js and Express.js, enabling the
            creation of scalable server-side solutions. I efficiently manage
            databases using MySQL and MongoDB and deploy applications on cloud
            platforms including AWS (utilizing services like RDS, Load
            Balancers, and EC2) and Google Cloud Platform.
            <br />
            Skilled in creating and maintaining RESTful APIs, I ensure seamless
            data exchange and integration with third-party APIs. My approach to
            development is grounded in agile methodologies, using Git and GitHub
            for version control.
            <br />
            I'm committed to learning and implementing new technologies,
            focusing on building efficient, maintainable, and scalable systems
            that provide high-quality user experiences and optimal performance.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Experience;
