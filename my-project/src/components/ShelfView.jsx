import { useState } from 'react'
import Shelf from './Shelf'
import Modal from './Modal'
import ModalContent from './ModalContent'

export default function ShelfView({ shelf }) {
  const [openItem, setOpenItem] = useState(null)

  return (
    <div className="flex min-h-screen flex-col font-serif">
      <header className="bg-ink px-6 py-8 md:px-12">
        <h1 className="text-3xl font-normal tracking-wide text-parchment md:text-5xl">
          {shelf.header?.title ?? 'Self On A Shelf'}
        </h1>
        <p className="mt-1.5 text-sm text-faded md:text-base">
          {shelf.header?.subtitle ?? 'Portfolios are boring. Try bookshelves instead'}
        </p>
      </header>

      <main
        className="flex flex-1 flex-col gap-6 bg-cover bg-center px-6 py-10 md:px-12"
        style={{ backgroundImage: "url('assets/wood.png')" }}
      >
        <h2 className="text-lg uppercase tracking-[0.15em] text-wood-ink opacity-70 md:text-xl">
          {shelf.title}
        </h2>
        <div className="flex w-full max-w-3xl flex-col gap-6">
          {shelf.shelves.map((s) => (
            <Shelf key={s.id} items={s.items} onOpen={setOpenItem} />
          ))}
        </div>
      </main>

      <footer className="bg-ink px-6 py-6 text-center text-xs uppercase tracking-[0.15em] text-faded md:px-12">
        made by {shelf.owner}
      </footer>

      {shelf.footer && (
        <div className="bg-ink-deep px-6 py-4 text-center text-xs tracking-widest text-[#5a4030] md:px-12">
          {shelf.footer.text}{' '}
          <a href={shelf.footer.url} className="underline">
            {shelf.footer.linkText}
          </a>
        </div>
      )}

      {openItem && (
        <Modal onClose={() => setOpenItem(null)}>
          <ModalContent item={openItem} />
        </Modal>
      )}
    </div>
  )
}