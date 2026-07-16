export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white"
    >
      <div className="container mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">
            Projects
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I am currently building production-level MERN Stack projects.
            Exciting projects will be added here very soon.
          </p>

          <div className="mt-12 p-10 rounded-2xl bg-slate-700/40 border border-slate-600">
            <h3 className="text-3xl font-bold mb-4">
                🚀 Coming Soon
            </h3>

            <p className="text-slate-300">
              • AI Powered E-Commerce Website
              <br /><br />
              • Real-time Chat Application
              <br /><br />
              • MERN Admin Dashboard
              <br /><br />
              • Portfolio Version 2.0
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}