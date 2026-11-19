import ShelfItem from './ShelfItem'

export default function Shelf({ items, onOpen }) {
    return (
        <div className="flex min-h-28 w-full items-end gap-3 overflow-x-auto rounded-sm border-t-[6px] border-shelf-edge bg-shelf px-5 pb-2.5 pt-4 shadow-[0_6px_16px_rgba(0,0,0,0.4)]">
            {items.map((item) => (
                <ShelfItem key={item.id} item={item} onOpen={onOpen} />
            ))}
        </div>
    )
}