import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCHED_DETAILED_EVENT = 'FETCHED_DETAILED_EVENT'
export const FETCHED_ALL_EVENTS = 'FETCHED_ALL_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

export const fetchEvent = (eventId) => (dispatch) => {
  request
    .get(`${baseUrl}/events/${eventId}`)
    .then(response => dispatch({
      type: FETCHED_DETAILED_EVENT,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchAllEvents = () => (dispatch) => {
  request
    .get(`${baseUrl}/events`)
    .then(response => dispatch({
      type: FETCHED_ALL_EVENTS,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const createEvent = (event) => (dispatch) => {
  request
    .post(`${baseUrl}/events`)
    .send(event)
    .then(response => dispatch({
      type: CREATE_EVENT,
      payload: response.body
    }))
}

export const deleteEvent = (eventId) => (dispatch) => {
  request
    .delete(`${baseUrl}/events/${eventId}`)
    .then(response => dispatch({
      type: DELETE_EVENT,
      payload: eventId
    }))
}
