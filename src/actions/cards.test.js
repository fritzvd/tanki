import {addCard} from './cards'

it('should add a card', function () {
  const expectedResult = {
    deckId: 1,
    card: {
      front: 'Dumelang',
      back: 'Goodday',
      id: 1
    },
    type: 'ADD_CARD'
  }
  const result = addCard(1, 1, 'Dumelang', 'Goodday')

  expect(result).toEqual(expectedResult)
})