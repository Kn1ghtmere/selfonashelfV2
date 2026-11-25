import { useState, useEffect } from 'react'

const mapShelves = (shelf, fn) => ({ ...shelf, shelves: shelf.shelves.map(fn) })

function load(initial, key) {
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : initial
  } catch {
    return saved ? { ...initial, ...JSON.parse(saved) } : initial
  }
}

export function useShelf(initial, storageKey) {
  const [shelf, setShelf] = useState(() => load(initial, storageKey))

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(shelf))
    } catch {
      // storage full or blocked: the editor still works, it just won't persist
    }
  }, [shelf, storageKey])

  const addItem = (shelfId, item) =>
    setShelf((s) =>
      mapShelves(s, (sh) =>
        sh.id === shelfId
          ? { ...sh, items: [...sh.items, { id: crypto.randomUUID(), ...item }] }
          : sh,
      ),
    )

  const updateItem = (itemId, changes) =>
    setShelf((s) =>
      mapShelves(s, (sh) => ({
        ...sh,
        items: sh.items.map((it) => (it.id === itemId ? { ...it, ...changes } : it)),
      })),
    )

  const removeItem = (itemId) =>
    setShelf((s) =>
      mapShelves(s, (sh) => ({ ...sh, items: sh.items.filter((it) => it.id !== itemId) })),
    )

  const addShelf = () =>
    setShelf((s) => ({
      ...s,
      shelves: [...s.shelves, { id: crypto.randomUUID(), items: [] }],
    }))


  const updateShelf = (changes) => setShelf((s) => ({ ...s, ...changes}))

  return { shelf, addItem, updateItem, removeItem, addShelf, updateShelf }
}