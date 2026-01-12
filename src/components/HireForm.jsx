import { useState } from "react";

export default function HireForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ now safe

    const data = {
      name,
      email,
      project,
      message,
    };

    const API_URL = import.meta.env.VITE_API_URL;
    console.log("test",API_URL);
    

    await fetch(`${API_URL}/api/enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

    alert("Enquiry sent successfully!");

    // reset form
    setName("");
    setEmail("");
    setProject("");
    setMessage("");
  };

  return (
    <section id="hire" className="min-h-screen flex items-center bg-[#f8fafc]">
      <div className="max-w-xl mx-auto px-6 w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Hire Me
        </h1>

        <form
          onSubmit={handleSubmit}   // ✅ correct place
          className="bg-white p-8 rounded-2xl shadow space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-4 py-3 rounded"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-3 rounded"
            required
          />

          <input
            type="text"
            placeholder="Project Type"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full border px-4 py-3 rounded"
          />

          <textarea
            placeholder="Tell me about your project"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border px-4 py-3 rounded"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-full hover:bg-teal-700 transition"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
