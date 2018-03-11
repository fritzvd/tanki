import React from 'react'
import './Overview.css'
import Deck from '../Deck/Deck'

const mockData = {
  name: 'Setswana',
  cards: [
    {
      back: 'Goodday',
      front: 'Dumelang',
      id: 1
    }
  ],
  deckId: 1
}

const Overview = ({ decks, deckIds, addDeck }) => {
  const decksList = decks.map((deck, i) =>
    <Deck key={i} changeActiveDeck={() => console.log('asdf')} deck={deck}></Deck>
  )
  return (
    <div>
      <button onClick={() => addDeck(mockData.name, mockData.cards)}>Add Mock Deck</button>
      {decksList}
    </div>
  )
}

export default Overview