import { useState } from 'react'
import Shelf from './Shelf'
import Modal from './Modal'
import ModalContent from './ModalContent'
import EditableText from './EditableText'
import Banner from './Banner'



export default function ShelfView({ shelf,editor }) {
  const [openItem, setOpenItem] = useState(null)

  return (
    <div className="flex min-h-screen flex-col font-serif">
      <header className="bg-ink px-6 py-8 md:px-12">
        <EditableText
        as="h1"
        editing={!!editor}
        value={shelf.header?.title ?? 'Self On A Shelf'}
        onChange={(v) => editor.onShelfChange({ header: { ...shelf.header, title: v}})}
        className="text-3xl font-normal tracking-wide text-parchment md:text-5xl"
        />
        <EditableText
        as="p"
        editing={!!editor}
        value={shelf.header?.subtitle ?? 'My portfolio to be ur frend'}
        onChange={(v) => editor.onShelfChange({ header: { ...shelf.header,subtitle: v}})}
        className="mt-1.5 text-sm text-faded md:text-base"
        />
      </header>

      <main
        className="flex flex-1 flex-col gap-6 bg-cover bg-center px-6 py-10 md:px-12 relative xl:min-h-[30rem]"
        style={{ backgroundImage: "url('assets/wood.png')" }}
      >
        <EditableText
        as="h2"
        editing={!!editor}
        value={shelf.title}
        onChange={(v) => editor.onShelfChange({ title: v })}
        className="text-lg uppercase tracking-[0.15em] text-wood-ink opacity-70 md:text-xl"
        />

        <div className="flex w-full max-w-3xl flex-col gap-6">
          {shelf.shelves.map((s) => (
            <Shelf
            key={s.id}
            items={s.items}
            onOpen={editor ? editor.onSelect : setOpenItem }
            onAdd={editor ? () => editor.onAdd(s.id) : undefined}
            />
          ))}

          {shelf.banner && (
            <Banner
            banner={shelf.banner}
            editing={!!editor}
            onChange={(changes) => editor.onShelfChange({ banner: {...shelf.banner,...changes} }) }
            onPickIcon={editor?.onPickBannerIcon}
            />
          )}

          {editor && (
            <button
            onClick={editor.onAddShelf}
            className="self-start rounded-border-2 border-dashed border-wood-ink/50 px-4 py-2 text-sm uppercase tracking-widest text-wood-ink"
            >
              + Add shelf
            </button>
          )}
        </div>
      </main>

      <footer className="flex items-center justify-center gap-2 bg-ink px-6 py-6 text-xs uppercase tracking-[0.15em] text-faded md:px-12">
        <span>made by</span>
        <div className={editor ? 'w-40' : ''}>
          <EditableText
          editing={!!editor}
          value={shelf.owner}
          onChange={(v) => editor.onShelfChange({owner: v})}
          className="uppercase tracking-[0.15em]"
          />
        </div>
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