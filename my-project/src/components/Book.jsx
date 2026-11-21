import { useState } from 'react'

export default function Book({ content }) {
    const [current, setCurrent] = useState(0)
    const pages = content.pages
    if (!pages?.length) {
        return <div className="rounded bg-parchment p-8 text-wood-ink">Coming moon</div>
    }
    const page = pages[current]
    const isCover = page.type === 'cover'

    return (
        <div className="relative flex h-[80vh] w-[90vw] max-w-3xl flex-col overflow-hidden rounded bg-page text-wood-ink shadow-2xl md:h-[440px] md:flex-row">
            {}
            <div className="flex-1 overflow-y-auto border-b border-[#c9b99a] px-6 pb-16 pt-6 md:border-b-0 md:border-r">
                {isCover ? (
                    <>
                    <h1 className="mb-2 text-2xl">{page.title}</h1>
                    <h3 className="mb-4 text-xs tracking-widest text-[#9a8870]">{page.subtitle}</h3>

                    </>
                    ) : (
                        <h2 className="mb-4 text-center text-xs tracking-widest text-[#9a8870]">{page.title}</h2>

                    )}

                    <div style={{ lineHeight: page.leading }}>
                        {page.lines.map((line, i) => (
                            <p key={i} className="text-xl">{line}</p>
                        ))}
                    </div>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center px-6 pb-16 pt-6">
                <img src={page.image} alt={page.title} className="max-h-full max-w-full object-contain" />

            </div>

            <button 
            onClick={() => setCurrent(current - 1)}
            disabled={current === 0}
            className="absolute bottom-4 left-4 border border-[#c9b99a] px-3 py-1.5 text-sm disabled:opacity-30"
            >
             ←
            </button>
            <button 
            onClick={() => setCurrent(current + 1)}
            disabled={current === pages.length -1}
            className="absolute bottom-4 right-4 border border-[#c9b99a] px-3 py-1.5 text-sm disabled:opacity-30"
            >
             →
            </button>
        </div>
    )
}