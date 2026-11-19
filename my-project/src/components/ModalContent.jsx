export default function ModalContent({item}) {
    if (item.type === 'image') {
        return (
            <img 
            src={item.content}
            alt={item.title}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            />
        )
    }

    if (item.type === 'book') {
        return (
            <div className="rounded bg-parchment p-8 text-wood-ink">
                Book
            </div>
        )
    }

    if (item.type === 'poem') {
        return (
            <div className="rounded bg-parchment p-8 text-wood-ink">
                poem
            </div>
        )
    }
    return null
}