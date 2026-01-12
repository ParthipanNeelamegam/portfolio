import "../index.css";


export default function About() {
  return (
    <section className="py-32 bg-[#f8fafc] ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              About Me
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
                I’m Parthipan, a Full Stack Developer with hands-on experience
                in building SaaS platforms, dashboards and secure APIs.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              I focus on:
            </p>

            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Clean and maintainable code</li>
              <li>Scalable backend architecture</li>
              <li>Modern and responsive UI</li>
            </ul>

            <br/>
            <p className="text-gray-600 leading-relaxed">
                More features like enquiry handling,
                notifications and admin dashboard
                are planned as part of this project.
            </p>
          </div>

          {/* SERVICES */}
          <div className="grid gap-6">
            {[
              "Web Application Development",
              "SaaS Platforms",
              "REST API Development",
              "Dashboard & Admin Panels"
            ].map(item => (
              <div
                key={item}
                className="p-6 rounded-2xl bg-teal-50 border border-teal-100"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
