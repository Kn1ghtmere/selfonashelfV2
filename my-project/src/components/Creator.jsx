import { useState } from 'react'
import ShelfView from './ShelfView'
import ItemEditor from './ItemEditor'
import { useShelf } from '../hooks/useShelf'
import {emptyShelf} from '../data/emptyShelf'
import {itemTypes} from '../itemTypes'
import {exportShelf} from '../lib/exportShelf'

const newItem = () => ({
    type: 'image',
    icon: 'book',
    title: 'New Item',
    behavior: { tooltip: ''},
    content: {...itemTypes.image.empty},
})

export default function Creator({ onExit }) {
    const { shelf, addItem, updateItem, removeItem, addShelf, updateShelf } = useShelf(
        emptyShelf,
        'selfonashelf:mine',

    )

    const [selectedId, setSelectedId] = useState(null)
    const selected = shelf.shelves.flatMap((s) => s.items).find((i) => i.id === selectedId)

    return (
        <>
        <div className="fixed bottom-4 left-4 z-40 flex gap-2">
        <button onClick={onExit} className="rounded bg-parchment px-3 py-1.5 text-wood-ink">
         ← Back
         </button>
         <button
         onClick={() => exportShelf(shelf)}
         className="rounded bg-parchment px-3 py-1.5 text-wood-ink">
            Export
         
         </button>
         </div>

         <ShelfView
         shelf={shelf}
         editor={{
            onSelect: (item) => setSelectedId(item.id),
            onAdd: (shelfId) => {
                const id = crypto.randomUUID()
                addItem(shelfId, {...newItem(), id})
                setSelectedId(id)
            },
            onAddShelf: addShelf,
            onShelfChange: updateShelf,
         }}
         />

         {selected && (
            <ItemEditor 
            item={selected}
            onChange={(changes) => updateItem(selected.id, changes)}
            onDelete={() => {
                removeItem(selected.id)
                setSelectedId(null)
            }}
            onClose={() => setSelectedId(null)}
            />
         )}
        </>
    )
}