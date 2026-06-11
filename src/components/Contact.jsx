function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-800 text-white p-20"
    >
      <h2 className="text-5xl font-bold mb-10">
        Contact Me
      </h2>

      <form className="flex flex-col gap-5 max-w-xl">

        <input
          type="text"
          placeholder="Name"
          className="p-4 text-black"
        />

        <input
          type="email"
          placeholder="Email"
          className="p-4 text-black"
        />

        <textarea
          rows="5"
          placeholder="Message"
          className="p-4 text-black"
        />

        <button className="bg-orange-500 p-4 rounded">
          Send Message
        </button>

      </form>
    </section>
  );
}

export default Contact;