import profile from "../assets/Pankaj.jpeg";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-slate-800 text-white flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div>
          <h3 className="text-orange-500 text-3xl">
            Hello, I'm
          </h3>

          <h1 className="text-6xl font-bold mt-4">
            Pankaj Pendavale
          </h1>

          <h2 className="text-3xl mt-4 text-yellow-400">
            AWS Developer
          </h2>

          <p className="mt-5 text-gray-300 max-w-lg">
            I build modern web applications using
            React, Node.js, Express and MongoDB.
          </p>

          <button className="bg-orange-500 px-6 py-3 rounded mt-5">
            Download CV
          </button>
        </div>

        <img
          src={profile}
          alt="profile"
          className="w-96 rounded-3xl"
        />

      </div>
    </section>
  );
}

export default Hero;