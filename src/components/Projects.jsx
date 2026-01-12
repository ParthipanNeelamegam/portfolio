import "../index.css";

export default function Projects() {
  return (
    <section id="portfolio" className="py-32 bg-[#f7fffd]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* TASKFLOW PROJECT */}
          <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition">
            <img
              src="/taskflow.png"
              alt="TaskFlow Dashboard"
              className="w-full h-56 object-cover"
            />

            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3">
                TaskFlow – Task Management Dashboard
              </h3>

              <p className="text-gray-600 mb-6">
                A smart task management dashboard built to track tasks,
                visualize progress, and manage work efficiently.
                This project demonstrates my skills in building
                real-world admin dashboards with clean UI and logic.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-sm bg-teal-100 text-teal-700 rounded-full">React</span>
                <span className="px-3 py-1 text-sm bg-teal-100 text-teal-700 rounded-full">Tailwind CSS</span>
                <span className="px-3 py-1 text-sm bg-teal-100 text-teal-700 rounded-full">Charts</span>
                <span className="px-3 py-1 text-sm bg-teal-100 text-teal-700 rounded-full">Dashboard UI</span>
              </div>

              <a
                href="https://melodic-squirrel-e4f8a1.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition"
              >
                View Live Demo →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

