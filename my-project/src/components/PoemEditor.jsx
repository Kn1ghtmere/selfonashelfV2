const field = 'mt-1 w-full rounded border border-shelf-edge bg-white/60 px-2 py-1'

export default function PoemEditor({ content, onChange }) {
    const { title = '', stanzas = [], sign = ''} = content

    const setStanza = (i, text) => 
        onChange({
            ...content,
            stanzas: stanzas.map((s, j) => (j === i ? text.split('\n') : s)),
        })

    const addStanza = () => onChange({...content, stanzas: [...stanzas, ['']] })

    const removeStanza = (i) =>
    onChange({ ...content, stanzas: stanzas.filter((_, j) => j !== i) })

    return (
        <div className="space-y-3">
            <label className="block">
                <span className="text-sm">Text title</span>
                <input
                value={title}
                onChange={(e) => onChange({ ...content, title: e.target.value })}
                className={field}
                />
            </label>


        {stanzas.map((stanzas, i) => (
            <div key={i}>
                <div className="flex justify-between text-sm">
                    <span>Sub text {i + 1}</span>
                    <button onClick={() => removeStanza(i)} className="text-red-900 underline">
                        Remove
                    </button>
                </div>
                <textarea
                value={stanzas.join('\n')}
                onChange={(e) => setStanza(i, e.target.value)}
                rows={Math.max(3, stanzas.length)}
                className={`${field} resize-none font-poem`}
                />
            </div>
        ))}

        <button onClick={addStanza} className="rounded border border-shelf-edge px-3 py-1 text-sm">
            + Stanza

        </button>

        <label className="block">
            <span className="text-sm">Signature</span>
            <input
            value={sign}
            onChange={(e) => onChange({...content, sign: e.target.value })}
            className={field}
            />
        </label>
        </div>
    )
} 