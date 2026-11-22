import { resolveIcon } from '../data/icons'


export default function ShelfItem({item, onOpen}) {
    return (
        <button
        onClick={() => onOpen(item)}
        title={item.behaviour?.tooltip || item.title}
        className="h-16 shrink-0 cursor-pointer transition-transform duration-200 hover:-translate-y-1.5 md:h-20"
        >
<img src={resolveIcon(item.icon)} alt={item.title} className="h-full w-auto" />        </button>
    )
}