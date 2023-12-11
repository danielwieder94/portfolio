import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      {/* Home Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center p-8 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="mb-4">Lorem ipsum dolor sit amet...</p>
        <div className="w-full md:w-1/2 h-64 bg-gray-200 mb-4">
          [Image Placeholder]
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex flex-col items-center justify-center p-8 text-center bg-white"
      >
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="mb-4">Lorem ipsum dolor sit amet...</p>
        <div className="w-full md:w-1/2 h-64 bg-gray-200 mb-4">
          [Image Placeholder]
        </div>
      </section>

      {/* Projects & Experience Section */}
      <section
        id="projects"
        className="flex flex-col items-center justify-center p-8 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Projects & Experience</h2>
        <p className="mb-4">Lorem ipsum dolor sit amet...</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Repeat this div for each project */}
          <div className="h-64 bg-gray-200 p-4">[Project Placeholder]</div>
          <div className="h-64 bg-gray-200 p-4">[Project Placeholder]</div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="flex flex-col items-center justify-center p-8 text-center bg-white"
      >
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="mb-4">Lorem ipsum dolor sit amet...</p>
        <form className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border border-gray-300 rounded w-full mb-4"
          />
          {/* Add more input fields as needed */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;
