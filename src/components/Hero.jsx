import "../index.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
      min-h-screen flex items-center
      bg-gradient-to-br
      from-[#e6fffa]
      via-[#f0fdfa]
      to-[#ecfeff]
    "
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#e9fbf6] p-12 rounded-3xl shadow-sm border-gray-200"
          >
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

            <p className="mt-4 text-gray-600 leading-relaxed max-w-md">
              I help startups and businesses turn ideas into
              reliable digital products using modern technologies.
            </p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 0.6 }
                }
              }}
              className="mt-10 flex gap-4"
            >
              <motion.a
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                href="#portfolio"
                className="px-8 py-3 bg-teal-600 text-white rounded-full text-sm hover:bg-teal-700 transition"
              >
                View My Work
              </motion.a>

              <motion.a
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                href="#contact"
                className="px-8 py-3 border border-teal-600 text-teal-700 rounded-full text-sm hover:bg-teal-50 transition"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="/parthipan.jpg"
              alt="Parthipan Neelamegam"
              className="w-[320px] md:w-[380px] rounded-3xl shadow-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
