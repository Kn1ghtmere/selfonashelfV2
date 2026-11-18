import { useState } from 'react'
import Shelf from './components/Shelf'
import { shelves } from './data/shelves'

export default function App() {
  const [openItem, setOpenItem] = useState(null)

  return (
    <div className="flex min-h-screen flex-col font-serif">
      <header className="bg-ink px-6 py-8 md:px-12">
        <h1 className="text-3xl font-normal tracking-wide text-parchment md:text-5xl">
          Self On A Shelf
        </h1>
        <p className="mt-1.5 text-sm text-faded md:text-base">
          Portfolios are boring. Try bookshelves instead
        </p>
      </header>

      <main className="flex flex-1 flex-col gap-6 bg-[url('/assets/wood.png')] bg-cover bg-center px-6 py-10 md:px-12">
        <h2 className="text-lg uppercase tracking-[0.15em] text-wood-ink opacity-70 md:text-xl">
          Knightmere's Archive
        </h2>
        <div className="flex w-full max-w-3xl flex-col gap-6">
          {shelves.map((items, i) => (
            <Shelf key={i} items={items} onOpen={setOpenItem} />
          ))}
        </div>
      </main>

      <footer className="bg-ink px-6 py-6 text-center text-xs uppercase tracking-[0.15em] text-faded md:px-12">
        made by kn1ghtmere
      </footer>
      <div className="bg-ink-deep px-6 py-4 text-center text-xs tracking-widest text-[#5a4030] md:px-12">
        A remake of my previous project{' '}
        <a href="https://selfonashelf.vercel.app/" className="underline">
          Self On A Shelf
        </a>
      </div>
    </div>
  )
}