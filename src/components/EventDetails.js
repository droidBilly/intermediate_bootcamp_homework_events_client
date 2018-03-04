import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchEvent } from '../actions/events'

class EventDetails extends PureComponent {

  componentWillMount(props) {
    this.props.fetchEvent(this.props.match.params.id)
  }

  render() {
    const {event} = this.props
    if (!event) return null

    return (
      <div>
        <h1>{ event.title }</h1>
        <p>{ event.start_date }</p>
        <p>{ event.end_date }</p>
        <p>{ event.description }</p>
      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
  return {
    event: state.event
  }
}

export default connect(mapStateToProps, { fetchEvent })(EventDetails)
