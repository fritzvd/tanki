import React from 'react'

const Deck = (props) => {
  console.log(props.deck)
  return <h1 onClick={() => props.changeActiveDeck(props.deck.id)}>{ props.deck.name }</h1>
}

export default Deck