import { useState } from 'react'
import ShelfView from './components/ShelfView'
import { defaultShelf } from './data/defaultShelf'

export default function App() {
  const [shelf] = useState(defaultShelf)
  return <ShelfView shelf={shelf} />
}