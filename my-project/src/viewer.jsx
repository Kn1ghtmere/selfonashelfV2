import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ShelfView from './components/ShelfView'
import { defaultShelf } from './data/defaultShelf'

function load() {
    try {
        return JSON.parse(document.getElementById('shelf-data').textContent)
    } catch {
        return defaultShelf
    }
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ShelfView shelf={load()} />
    </StrictMode>
)