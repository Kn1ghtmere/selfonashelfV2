export default function Poem({ content: poem }) {
  return (
    <div style={{ backgroundImage: "url('assets/natural-paper.png')"}} className="max-h-[85vh] w-[90vw] max-w-2xl overflow-y-auto rounded bg-[#d4a564] px-6 py-8 text-center font-poem shadow-2xl md:px-12">
      <h1 className="pb-8 text-2xl font-medium text-old-ink md:text-3xl">
        "{poem.title}"
      </h1>

      {poem.stanzas.map((stanza, i) => (
        <div key={i} className="pb-10">
          {stanza.map((line, j) => (
            <p key={j} className="text-xl font-bold leading-8 text-old-ink">
              {line}
            </p>
          ))}
        </div>
      ))}

      <p className="pb-2 text-right text-sm text-old-ink">{poem.sign}</p>
    </div>
  )
}