import "../index.css";

export default function Hero() {
  return (
<section className="
  min-h-screen flex items-center
  bg-gradient-to-br
  from-[#e6fffa]
  via-[#f0fdfa]
  to-[#ecfeff]
">

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* LEFT CONTENT */}
          <div className="bg-[#e9fbf6] p-12 rounded-3xl shadow-sm border-gray-200">
            <p className="text-sm tracking-widest uppercase text-teal-600 mb-4">
              Hello, I’m
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Parthipan <br />
              <span className="text-teal-700">Neelamegam</span>
            </h1>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
              A freelance full stack developer who builds modern,
              scalable and user-focused web applications for startups
              and businesses.
            </p>

            <br/>
             <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
                I help startups and businesses turn ideas into
                reliable digital products using modern technologies.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#portfolio"
                className="px-8 py-3 bg-teal-600 text-white rounded-full text-sm hover:bg-teal-700 transition"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-8 py-3 border border-teal-600 text-teal-700 rounded-full text-sm hover:bg-teal-50 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/parthipan.jpg"
                alt="Parthipan Neelamegam"
                className="w-[320px] md:w-[380px] rounded-3xl shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
