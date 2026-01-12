import "../index.css";

const techs = [
  "React", "Node.js", "MongoDB",
  "Express", "Tailwind CSS",
  "JWT Auth", "AWS", "Git"
];

export default function TechStack() {
  return (
    <section>
      <div className="container">
        <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>

        <div className="flex flex-wrap gap-4">
          {techs.map(t => (
            <span
              key={t}
              className="px-5 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
