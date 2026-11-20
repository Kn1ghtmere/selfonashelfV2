import Book from './Book'
import Poem from './Poem'

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
        if (!item.pages) {
            return <div className="rounded bg-parchment p-8 text-wood-ink">Coming Soon</div>
        }
        return <Book pages={item.pages} />
        }
    

    if (item.type === 'poem') {
        return <Poem poem={item.poem} />
    }
  return null   
}
