// About.js
import { url } from "inspector";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-full fade-out py-12 text-center"
      style={{
        height: "100vh",
      }}
    >
      <div className="background-img"></div>
      <div
        className="relative isolate mx-auto px-4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          height: "100%",
        }}
      >
        <h2 className="font-bold  text-slate-300">ABOUT ME</h2>
        <p className="mt-[5%] max-w-2xl text-center text-slate-300/90">
          My journey into the tech world began not with a computer, but with the
          strings of a guitar. <br /> At 13, I discovered the joy of music, a
          passion that carried me through a music-focused high school, into the
          army band, and then as an independent musician. <br /> Each chord and
          melody was a lesson in creativity and structure, a balance that would
          later resonate deeply in my coding career. <br /> Just as I needed to
          select each note to create harmony in music, I now apply the same
          precision in coding, finding beauty in the blend of creativity and
          structured logic that programming offers.
        </p>
        <p className="mt-[5%] max-w-2xl text-center text-slate-300/90">
          Beyond the rhythms and codes, my intrigue with the human mind led me
          to explore psychology and Neuro-Linguistic Programming. <br /> This
          wasn't just academic curiosity; it was a quest to understand the
          intricate tapestry of human thoughts and behaviors. These studies have
          become a cornerstone of my approach to technology. <br /> In coding,
          as in music, there's an audience to connect with. My background in
          psychology helps me develop software that doesn't just perform tasks
          but also engages and resonates with humans, not just users.
        </p>
        <p className="mt-[5%] max-w-2xl text-center text-slate-300/90">
          Today, my life is a symphony of experiences. The lessons from strings
          and keys, chords and code, human psychology and digital logic, all
          harmonize to shape my unique perspective in technology. <br /> Whether
          I'm developing user-friendly applications or architecting systems, I
          strive to innovate with empathy and precision, ensuring that every
          project not only meets technical standards but also enriches the
          user's experience. <br /> My journey from music to technology might
          seem like a shift of gears, but for me, it's been a continuous melody
          of learning, evolving, and connecting – a melody that plays on in
          every line of code I write.
        </p>

        {/* Additional content can be added here */}
      </div>
    </section>
  );
};

export default About;
