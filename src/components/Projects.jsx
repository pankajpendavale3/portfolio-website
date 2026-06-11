import project1 from "../assets/Project1.avif";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-900 text-white p-20"
    >
      <h2 className="text-5xl font-bold mb-10">
        Projects
      </h2>

      <div className="bg-slate-700 rounded p-5">

        <img
          src={project1}
          alt="project"
          className="rounded"
        />

        <h3 className="text-2xl mt-5">
          E-Commerce Website
        </h3>

        <p>
          Built with React, Node.js and MongoDB.
        </p>

      </div>
    </section>
  );
}

export default Projects;