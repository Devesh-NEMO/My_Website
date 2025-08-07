import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // success | error | loading
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userEmail = formData.get("email");

    // ✅ Basic email validation
    if (!/\S+@\S+\.\S+/.test(userEmail)) {
      setStatus("error");
      setMessage("❌ Invalid email address.");
      return;
    }

    // ⏳ Start loading
    setStatus("loading");

    const now = new Date();
    formData.append("time", now.toLocaleString());

    try {
      await emailjs.sendForm(
        "service_ojtosnk",
        "template_pgi65fx",
        form.current,
        "jBYIFONiQw5l8xaZB"
      );

      setStatus("success");
      setMessage("✅ Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setMessage("❌ Failed to send message. Try again.");
    }
  };

  return (
    <section id="contact" className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-4xl text-center font-bold mb-6">📬 Contact Me</h2>

      {/* 🔔 Status Message */}
      {status && status !== "loading" && (
        <div
          className={`mb-4 p-3 text-sm rounded-md font-medium text-center ${
            status === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {message}
        </div>
      )}

      <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-10">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/contact_me.avif"
            alt="Contact"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 w-full md:w-1/2"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-3 rounded-md bg-black/20 border border-gray-600 text-white placeholder:text-gray-300"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-3 rounded-md bg-black/20 border border-gray-600 text-white placeholder:text-gray-300"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-md bg-black/20 border border-gray-600 text-white placeholder:text-gray-300"
          ></textarea>

          {/* Hidden fields */}
          <input type="hidden" name="time" />
          <input type="hidden" name="_replyto" value="" />
          <input type="hidden" name="_cc" value="" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          {/* ⏳ Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-semibold transition disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
