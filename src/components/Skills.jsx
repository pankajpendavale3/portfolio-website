function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-800 text-white p-20"
    >
      <h2 className="text-5xl font-bold mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-slate-700 p-5 rounded">
          React
        </div>

        <div className="bg-slate-700 p-5 rounded">
          Node.js
        </div>

        <div className="bg-slate-700 p-5 rounded">
          MongoDB
        </div>

        <div className="bg-slate-700 p-5 rounded">
          AWS
        </div>

      </div>
    </section>
  );
}

export default Skills;