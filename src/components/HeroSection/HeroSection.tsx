import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ReactComponent as MySvg } from "../../assets/undraw_version_control_re_mg66.svg";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section id="home" className=" fade-out">
      {/* <div className=" px-6 lg:px-8"> */}
      <div className="m-auto max-w-2xl sm:py-48 lg:py-20">
        <div className=" text-center">
          <h2 className="lightbulb-h2 text-4xl font-bold tracking-tight text-neutral-50/70 sm:text-6xl">
            {"Full Stack Developer"}
          </h2>
          <p className="fade-in-paragraph mt-8 text-md leading-7 text-slate-50/70">
            With a comprehensive background in both front-end and back-end
            development, I bring extensive knowledge in modern technologies such
            as React.js, Next.js, Angular, and TypeScript. <br /> Proficiency
            extends to UI libraries including Material UI, Bootstrap, and
            TailwindCSS, complemented by a strong foundation in Node.js and
            Express.js. <br /> My experience encompasses database management and
            deployment with MySQL, MongoDB, as well as proficient utilization of
            cloud platforms like Google Cloud Platform and AWS, including
            services like RDS, Load Balancers, and EC2. Skilled in creating and
            maintaining RESTful APIs, I excel in designing systems that support
            both scheduled and real-time data fetching, integrating seamlessly
            with a variety of third-party APIs. This skill set ensures robust,
            scalable, and responsive applications. <br /> Adept in using Git and
            GitHub, with a commitment to agile methodologies, I continuously
            strive to keep up with the latest technological advancements. <br />{" "}
            Known for robust problem-solving skills, a self-driven learning
            approach, and effective collaboration, my focus is consistently on
            learning and implementing new technologies while efficiently
            creating and maintaining robust systems. In every project, my goal
            is to deliver efficient, maintainable, and scalable solutions,
            ensuring high-quality user experiences and optimal performance.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#skills"
              className="rounded-md bg-slate-500/50  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600/50"
            >
              Explore
            </a>
            <a
              href="#contact"
              className="contact-me-btn text-sm font-semibold leading-7 p-1.5 text-gray-400/75 hover:text-white/75"
            >
              Contact me <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
