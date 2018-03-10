import React from 'react'
import ReactDOM from 'react-dom'
import Overview from './Overview'

// mock
const deck = {
  deckIds: [1, 2, 3],
  decks: [ 
    { id: 1, name: 'Toki Pona' },
    { id: 2, name: 'Toki Pona::Level 7'},
    { id: 3, name: 'example'}
  ]
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Overview decks={deck.decks} deckIds={deck.deckIds} />, div)
})

it('updates state onclick', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Overview decks={deck.decks} deckIds={deck.deckIds} />, div)
  expect(div.innerHTML.indexOf("Toki")).toBe(4)
})