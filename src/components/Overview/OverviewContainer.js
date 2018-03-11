import { connect } from 'react-redux'
import Overview from '../Overview/Overview'
import { decks, cards} from '../../actions'

const getVisibleDecks = (decks, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return decks
    case 'SHOW_COMPLETED':
      return decks.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return decks.filter(t => !t.completed)
    default:
      return decks
  }
}

const getDeckIds = (decks) => {
  return decks.map((deck) => deck.id)
}

const mapStateToProps = state => {
  return {
    decks: getVisibleDecks(state.decks, state.visibilityFilter),
    deckIds: getDeckIds(state.decks)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch('id') //Todo
    },
  }
}

const actions = {
  addDeck: decks.addDeck
}

const OverviewContainer = connect(
  mapStateToProps,
  actions
)(Overview)

export default OverviewContainer