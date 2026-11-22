import { useState } from 'react'
import ShelfView from './components/ShelfView'
import Creator from './components/Creator'
import { defaultShelf } from './data/defaultShelf'

export default function App() {
  const [mode,setMode] = useState('view')

  if (mode === 'create') return <Creator onExit={() => setMode('view')} />

  return (
    <>
    <button
    onClick={() => setMode('create')}
    className="fixed bottom-4 left-z z-40 rounded bg-parchment px-3 py-1.5 text-wood-ink"
    >
      Create your own shelf
    </button>
    <ShelfView shelf={defaultShelf} />
    </>
  )
}