import { combineReducers } from 'redux'
// import { read } from 'anki'

const filterDecks = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const initialState = {
  decks: []
}

export const decks = (state = initialState.decks, action) => {
  console.log('reduce')
  switch (action.type) {
    case 'ADD_DECK':
      return [...state, action.deck]
    case 'REMOVE_DECK':
      return state.filter(deck => action.deckId !== deck.id)
    case 'ADD_CARD':
      return state.map((deck) => (action.deckId) ? {...deck, cards: deck.cards.concat(action.card)} : deck)
    case 'REMOVE_CARD':
      return state
        .map((deck) => 
          (action.deckId) ? {
            ...deck,
            cards: deck.cards
                        .filter(card => card.id !== action.id)
          } : deck)
    default:
      return state
  }
}

const tankiApp = combineReducers({
  decks,
  filterDecks
})

export default tankiApp