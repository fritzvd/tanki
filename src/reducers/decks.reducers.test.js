import tankiApp, { decks } from './index'
import { addCard, removeCard } from '../actions/cards'
import { createStore } from 'redux'

it('should return an emptylist at decks', () => {
  let store = createStore(tankiApp)
  expect(store.getState().decks).toEqual([])
})

it('should add card to deck', () => {
  const initialState = [{deckId: 1, cards: []}];
  const expected = [
    {
      cards: [
        {
          back: 'Goodday',
          front: 'Dumelang',
          id: 1
        }
      ],
      deckId: 1
    }
  ]
  expect(decks(initialState, addCard(1, 1, 'Dumelang', 'Goodday')))
    .toEqual(expected)
})

it('should remove card to deck', () => {
  const initialState = [
    {
      cards: [
        {
          back: 'Goodday',
          front: 'Dumelang',
          id: 1
        }
      ],
      deckId: 1
    }
  ]
  const expected = [{deckId: 1, cards: []}];
  
  expect(decks(initialState, removeCard(1, 1)))
    .toEqual(expected)
})