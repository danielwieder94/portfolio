import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-slate-300/75 p-4 bg-opacity-50 backdrop-filter backdrop-blur-md shadow-sm text-sm">
      {/* Left - Navigation Items */}
      <div className="flex justify-start md:flex-1 font-semibold">
        <a href="#home" className="mx-2">
          Home
        </a>
        <a href="#experience" className="mx-2">
          Experience
        </a>
        <a href="#about" className="mx-2">
          About
        </a>
        <a href="#skills" className="mx-2">
          Skills
        </a>
        <a href="#contact" className="mx-2">
          Contact
        </a>
      </div>

      {/* Center - Rights Reserved */}
      <div className="flex justify-center md:flex-1 my-4 md:my-0">
        <span>All rights reserved &copy; Daniel Wieder 2023</span>
      </div>

      {/* Right - Social Icons */}
      <div className="flex justify-end md:flex-1">
        <a
          href="https://www.linkedin.com/in/daniel-wieder-6299611ba/"
          className="mx-2"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <a href="https://github.com/danielwieder94" className="mx-2">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
      </div>
    </div>
  );
};
// const Footer = () => {
//   return (
//     <div className="m-auto w-full bg-transparent text-slate-300/75 p-4 flex flex-col md:flex-row justify-between items-center bg-opacity-50 backdrop-filter backdrop-blur-md shadow-sm">
//       <div className="flex flex-grow justify-start flex-col md:flex-row rounded-md text-sm font-medium">
//         {/* Footer Menu */}
//         <a href="#home" className="mx-2 my-1">
//           Home
//         </a>
//         <a href="#about" className="mx-2 my-1">
//           About
//         </a>
//         <a href="#projects" className="mx-2 my-1">
//           Projects
//         </a>
//         <a href="#contact" className="mx-2 my-1">
//           Contact
//         </a>
//       </div>

//       <div className="flex flex-grow text-sm ml-10 mt-4 md:mt-0 ">
//         <span>All rights reserved &copy; Daniel Wieder 2023</span>
//       </div>

//       <div className="flex flex-grow justify-end mt-4 md:mt-0">
//         {/* Social Icons */}
//         <a href="https://linkedin.com/in/yourprofile" className="mx-2">
//           <FontAwesomeIcon icon={faLinkedin} size="xl" />
//         </a>
//         <a href="https://github.com/yourusername" className="mx-2 ">
//           <FontAwesomeIcon icon={faGithub} size="xl" />
//         </a>
//       </div>
//     </div>
//   );
// };

export default Footer;
