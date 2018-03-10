export const addDeck = (cards, name) => {
  return {
    type: 'ADD_DECK',
    deck: {name, cards}
  }
}