
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white"
    >
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            Projects
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Here are some of the projects I have built using modern
            technologies across full-stack development, AI, and web APIs.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-8 rounded-2xl bg-slate-700/40 border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Title */}
              <h3 className="text-3xl font-bold mb-4 text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 text-sm rounded-full bg-slate-800 text-cyan-300 border border-slate-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-slate-800 border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

