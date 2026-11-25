import { knightsJourney } from './knightsJourney'
import { haytham } from './haytham'

export const defaultShelf = {
  title: "Knightmere's Archive",
  banner: { icon: 'scroll1' , heading: 'About me', text: 'more bout me'},
  owner: 'kn1ghtmere',
  shelves: [
    {
      id: 'shelf-1',
      items: [
        { id: 'book1', type: 'book', icon: 'book', title: 'The Knights Journey', content: { pages: knightsJourney } },
        { id: 'scroll1', type: 'image', icon: 'scroll', title: 'Scroll', content: { src: 'assets/scrollcontainer.png' } },
        { id: 'poem1', type: 'poem', icon: 'musicpage', title: "My thoughts weren't what you sought", content: haytham },
        { id: 'drawing', type: 'image', icon: 'drawframe', title: 'Drawing', content: { src: 'assets/drawing.png' } },
      ],
    },
    { id: 'shelf-2', items: [{ id: 'book2', type: 'book', icon: 'book', title: 'Coming soon', content: { pages: [] } }] },
    { id: 'shelf-3', items: [{ id: 'book3', type: 'book', icon: 'book', title: 'Coming soon', content: { pages: [] } }] },
  ],
}