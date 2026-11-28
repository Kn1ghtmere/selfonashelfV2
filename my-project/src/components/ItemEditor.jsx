import Modal from './Modal'
import { icons } from '../data/icons'
import { itemTypes } from '../itemTypes'
import PoemEditor from './PoemEditor'
import { isSafeImage } from '../lib/validate'
import BookEditor from './BookEditor'


const field = 'mt-1 w-full rounded border border-shelf-edge bg-white/60 px-2 py-1'


export default function ItemEditor({ item, onChange, onDelete, onClose }) {
  const src = item.content?.src ?? ''
  const okSrc = isSafeImage(src)
  return (
    <Modal onClose={onClose}>
      <div className="max-h-[85vh] w-[90vw] max-w-md space-y-4 overflow-y-auto rounded bg-parchment p-6 text-wood-ink shadow-2xl">
        <label className="block">
          <span className="text-sm">Title</span>
          <input
            value={item.title}
            onChange={(e) => onChange({ title: e.target.value })}
            className={field}
          />
        </label>

        <label className="block">
          <span className="text-sm">Hover description</span>
          <input
            value={item.behavior?.tooltip ?? ''}
            onChange={(e) =>
              onChange({ behavior: { ...item.behavior, tooltip: e.target.value } })
            }
            className={field}
          />
        </label>

        <div>
          <span className="text-sm">Icon</span>
          <div className="mt-1 flex flex-wrap gap-2">
            {Object.entries(icons).map(([key, path]) => (
              <button
                key={key}
                onClick={() => onChange({ icon: key })}
                className={`rounded p-1 ${item.icon === key ? 'bg-shelf' : 'bg-white/40'}`}
              >
                <img src={path} alt={key} className="h-10 w-auto" />
              </button>
            ))}
          </div>
        </div>

        <label className="block">
          <span className="text-sm">Opens as</span>
          <select
            value={item.type}
            onChange={(e) =>
              onChange({
                type: e.target.value,
                content: { ...itemTypes[e.target.value].empty },
              })
            }
            className={field}
          >
            {Object.entries(itemTypes).map(([key, t]) => (
              <option key={key} value={key}>
                {t.label}
              </option>
            ))}
          </select>
        </label>

        {item.type === 'image' && (
          <label className="block">
            <span className="text-sm">Image address</span>
            <input 
            value={src}
            onChange={(e) => onChange({ content: {src: e.target.value } })}
            placeholder="https://..."
            className={field}
            />
            {!okSrc && <span className="text-xs text-red-800">Must start with https://</span>}
          </label>
        )}

        {item.type === 'poem' && (
          <PoemEditor content={item.content} onChange={(content) => onChange({content})} />
        )}

        {item.type === 'book' && (
          <BookEditor content={item.content} onChange={(content) => onChange({ content })} />
        )}

        <div className="flex justify-between">
          <button onClick={onDelete} className="rounded px-3 py-1.5 text-red-900 underline">
            Delete
          </button>
          <button onClick={onClose} className="rounded bg-shelf px-4 py-1.5 text-parchment">
            Done
          </button>
        </div>
      </div>
    </Modal>
  )
}