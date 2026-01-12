export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-lg">
          Parthipan<span className="text-teal-600">.</span>
        </span>

        <div className="flex gap-6 text-sm">
          <a href="#portfolio">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
