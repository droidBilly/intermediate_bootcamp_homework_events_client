import {FETCHED_ALL_EVENTS} from '../actions/events'
import {CREATE_EVENT} from '../actions/events'
import {DELETE_EVENT} from '../actions/events'
import {UPDATE_EVENT} from '../actions/events'

export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_ALL_EVENTS:
      return action.payload
    case CREATE_EVENT:
      return [...state, action.payload]
    case DELETE_EVENT:
      return state.filter(event => event.id !== action.payload)
    case UPDATE_EVENT:
      return state.map(event => {
        if (event.id === action.payload.id) {
          return action.payload
        }
        else return event
      })
    default:
      return state
  }
}
