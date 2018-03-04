import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchAllEvents } from '../actions/events'
import { createEvent } from '../actions/events'
import { deleteEvent } from '../actions/events'
import {Link} from 'react-router-dom'
import EventForm from './EventForm'

class EventsList extends PureComponent {
  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      start_date: PropTypes.string.isRequired,
      end_date: PropTypes.string.isRequired,
    })).isRequired
  }

  componentWillMount() {
    this.props.fetchAllEvents()
  }

  createEvent = (event) => {
    this.props.createEvent(event)
  }

  deleteEvent = (eventId) => {
    this.props.deleteEvent(eventId)
  }

  render() {
    const {events} = this.props
    return (
      <div>
        <h1>All events</h1>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Start date</th>
              <th>End date</th>
              <th>  </th>
            </tr>
          </thead>
          <tbody>
            { events.map(event => (<tr key={event.id}>
              <td><Link to={ `/events/${event.id}` }>{event.title}</Link></td>
              <td>{event.start_date}</td>
              <td>{event.end_date}</td>
              <td><button onClick={ () => this.deleteEvent(event.id) }
>delete</button></td>
            </tr>)) }
          </tbody>
				</table>

        <h2>Create a new Event</h2>
        <EventForm onSubmit={this.createEvent} />
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    events: state.events
  }
}


export default connect(mapStateToProps, {
  fetchAllEvents,
  createEvent,
  deleteEvent
})(EventsList)
