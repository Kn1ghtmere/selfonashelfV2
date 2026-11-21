import { useState } from 'react'
import ShelfView from './components/ShelfView'
import { defaultShelf } from './data/defaultShelf'
import { exportShelf } from './lib/exportShelf'

export default function App() {
  const [shelf] = useState(defaultShelf)

  return (
    <>
      <button
        onClick={() => exportShelf(shelf)}
        className="fixed bottom-4 left-4 z-40 rounded bg-parchment px-3 py-1.5 text-wood-ink"
      >
        Export
      </button>
      <ShelfView shelf={shelf} />
    </>
  )
}