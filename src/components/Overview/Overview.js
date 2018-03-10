import React from 'react'
import './Overview.css'
import Deck from '../Deck/Deck'

const Overview = ({ decks, deckIds }) => {
   return decks.map((deck, i) => {
     return <Deck key={deckIds[i]} deck={deck}></Deck>
   })
}

export default Overview