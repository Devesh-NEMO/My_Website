import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate email sending service here like EmailJS or backend API
    alert("Thank you for reaching out! 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact px-6 py-12 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">📬 Contact Me</h1>

      <p className="text-lg mb-8">
        Have a question, idea, or just want to connect? Drop a message below or reach out via my socials — I'm always open to chat!
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
