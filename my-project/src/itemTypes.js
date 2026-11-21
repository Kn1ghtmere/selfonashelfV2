import Book from './components/Book'
import Poem from './components/Poem'
import ImageView from './components/ImageView'

export const itemTypes = {
    image: { label: 'Image' , View: ImageView, empty: { src: ''}},
    book: { label: 'Book', View: Book , empty: {pages: []}},
    poem: { label: 'Poem', View: Poem, empty: {title: '', stanzas: [], sign: ''}},
}