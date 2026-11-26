import { useState } from 'react'
import { isSafeImage } from '../lib/validate'

const field = 'mt-1 w-full rounded border border-shelf-edge bg-white/60 px-2 py-1'

const newPage = () => ({ title: '' , image: '' , leading: 1.6, lines: [] })

export default function BookEditor({ content, onChange }) {
    const pages = content.pages ?? []
    const [current, setCurrent] = useState(0)
    const idx = Math.min(current, pages.length -1)
    const page = pages[idx]

    const setPages = (next) => onChange({ ...content, pages: next})

    const updatePage = (changes) =>
        setPages(pages.map((p, i) => (i === idx ? { ...p, ...changes} : p)))

    const addPage = () => {
        setPages([...pages, newPage()])
        setCurrent(pages.length)
    }

    const removePage = () => {
        setPages(pages.filter((_, i) => i !== idx))
        setCurrent(Math.max(0, idx - 1))
    }

    if (!page) {
        return (
            <button onClick={addPage} className="rounded border border-shelf-edge px-3 py-1 text-sm">
                + First page
            </button>

        
        )
    }

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                    <button
                    onClick={() => setCurrent(idx - 1)}
                    disabled={idx === 0}
                    className="px-2 disabled:opacity-30"
                    >
                        ←
                    </button>
                    <span>
                        Page {idx + 1 } of {pages.length}
                    </span>
                    <button
                    onClick={() => setCurrent(idx + 1)}
                    disabled={idx === pages.length - 1}
                    className="px-2 disabled:opacity-30"
                    >
                        →
                    </button>
                </div>
                <button onClick={removePage} className="text-red-900 underline">
                    Remove page
                </button>
            </div>

            <label className="flex item-center gap-2 text-sm">
                <input
                type="checkbox"
                checked={page.type === 'cover'}
                onChange={(e) => updatePage({ type: e.target.checked ? 'cover' : undefined})}
                />
                Cover page
            </label>

            <label className="block">
                <span className="text-sm">Title</span>
                <input
                value={page.title ?? ''}
                onChange={(e) => updatePage({title: e.target.value})}
                className={field}
                />

                {page.type === 'cover' && (
                    <label className="block">
                        <span className="text-sm">Subtitle</span>
                        <input
                        value={page.subtitle ?? ''}
                        onChange={(e) => updatePage({ subtitle: e.target.value})}
                        className={field}
                        />
                    </label>
                )}

            <label className="block">
                <span className="text-sm">Page-Image</span>
                <input
                value={page.image ?? ''}
                onChange={(e) => updatePage({ image: e.target.value })}
                placeholder="https://..."
                className={field}
                />
                {!isSafeImage(page.image) && (
                    <span className="text-xs text-red-800">Must start with https://</span>
                )}
            </label>

            <label className="block">
                <span className="text-sm">Line spacing</span>
                <input
                type="number"
                step="0.1"
                min="1"
                max="3"
                value={page.leading ?? ''}
                onChange={(e) =>
                    updatePage({ leading: e.target.value === '' ? undefined : Number(e.target.value) })
                }
                className={field}
                />
            </label>

                <label className="block">
                    <span className="text-sm">Text (one line per row)</span>
                    <textarea
                    value={(page.lines ?? []).join('.\n')}
                    onChange={(e) => updatePage({ lines: e.target.value.split('\n') })}
                    rows={6}
                    className={`${field} resize-none`}
                    />
                </label>

                <button onClick={addPage} className="rounded border border-shelf-edge px-3 py-1 text-sm">
                + Page
                </button>

            </label>
        </div>
    )
}