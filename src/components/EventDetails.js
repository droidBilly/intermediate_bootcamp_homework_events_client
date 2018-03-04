import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchEvent } from '../actions/events'
import { updateEvent } from '../actions/events'
import EventForm from './EventForm'

class EventDetails extends PureComponent {
  state = {
    edit: false
  }

  componentWillMount(props) {
    this.props.fetchEvent(this.props.match.params.id)
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  updateEvent = (event) => {
    this.props.updateEvent(this.props.match.params.id, event)
    this.toggleEdit()
  }

  render() {
    const {event} = this.props
    if (!event) return null

    return (
      <div>
        <h1>{ event.title }</h1>
        {
          this.state.edit &&
          <EventForm initialValues={event} onSubmit={this.updateEvent} />
        }
        {
          !this.state.edit &&
          <div>
          <p>{ event.start_date }</p>
          <p>{ event.end_date }</p>
          <p>{ event.description }</p>
          </div>
        }
        <button onClick={() => this.toggleEdit() }>edit</button>

      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
  return {
    event: state.event
  }
}

export default connect(mapStateToProps, { fetchEvent, updateEvent })(EventDetails)
