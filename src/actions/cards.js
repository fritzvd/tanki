export const addCard = (deckId, cardId, front, back) => ({
  type: 'ADD_CARD',
  deckId,
  card: {
    id: cardId,
    front,
    back
  }
})

export const removeCard = (deckId, cardId) => ({
  type: 'REMOVE_CARD',
  deckId,
  id: cardId
})