export const addDeck = (name, cards) => {
  return {
    type: 'ADD_DECK',
    deck: {name, cards}
  }
}