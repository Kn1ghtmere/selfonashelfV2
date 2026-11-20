import { knightsJourney } from './knightsJourney'
import { haytham } from './haytham'

export const shelves = [
    [
        { id: 'book1', type:'book', icon: '/assets/book1.gif', title:"The Knights Journey", pages: knightsJourney},
        { id: 'scroll1', type: 'image', icon: '/assets/scroll1.png', title:'Scroll', content: '/assets/scrollcontainer.png'},
        { id: 'poem1', type:'poem', icon: '/assets/musicpage.png', title:"My thoughts weren't what you sought", poem: haytham},
        { id: 'drawing', type:'image', icon: '/assets/drawframe.png', title:"Drawing", content:'/assets/drawing.png'},
    ],
    [
        { id: 'book2', type: 'book', icon: '/assets/book1.gif', title:'Coming soon'},
    ],
    [
        { id: 'book3', type: 'book' , icon: '/assets/book1.gif', title:'Coming soon'},
    ],
]
