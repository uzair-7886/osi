export default function JoinUs({ roles }) {
  if (!roles?.length) return null

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-orange text-2xl md:text-2xl font-semibold mb-8">
          Join Us As
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {roles.map((role) => (
            <span
              key={role}
              className=" bg-white border border-orange text-orange text-lg font-semibold px-6 py-3 rounded shadow-lg"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
