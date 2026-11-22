import ShelfItem from './ShelfItem'

export default function Shelf({ items, onOpen, onAdd }) {
    return (
        <div className="flex min-h-28 w-full items-end gap-3 overflow-x-auto rounded-sm border-t-[6px] border-shelf-edge bg-shelf px-5 pb-2.5 pt-4 shadow-[0_6px_16px_rgba(0,0,0,0.4)]">
            {items.map((item) => (
                <ShelfItem key={item.id} item={item} onOpen={onOpen} />
            ))}
            {onAdd && (
                <button
                onClick={onAdd}
                className="h-16 w-16 shrink-0 rounded border-2 border-dashed border-faded text-2xl text-faded md:h-20 md:w-20"
                >
                    +
                </button>
            )}
        </div>
    )
}