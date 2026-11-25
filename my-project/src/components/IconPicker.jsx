import Modal from './Modal'
import { icons } from '../data/icons'

export default function IconPicker({ value, onPick, onClose }) {
  const choose = (key) => {
    onPick(key)
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <div className="w-[90vw] max-w-sm rounded bg-parchment p-6 text-wood-ink shadow-2xl">
        <p className="mb-3 text-sm">Banner icon</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => choose('')}
            className={`rounded px-3 py-2 text-sm ${value === '' ? 'bg-shelf text-parchment' : 'bg-white/40'}`}
          >
            None
          </button>
          {Object.entries(icons).map(([key, path]) => (
            <button
              key={key}
              onClick={() => choose(key)}
              className={`rounded p-1 ${value === key ? 'bg-shelf' : 'bg-white/40'}`}
            >
              <img src={path} alt={key} className="h-10 w-auto" />
            </button>
          ))}
        </div>
      </div>
    </Modal>
  )
}