import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class EventForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		const initialValues = this.props.initialValues || {}
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="title">Event title: </label>
					<input name="title" id="title" value={
						this.state.title || initialValues.title || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="start_date">Event start date: </label>
					<input name="start_date" id="start_date" value={
						this.state.start_date || initialValues.start_date || ''
					} onChange={ this.handleChange } />
				</div>

        <div>
          <label htmlFor="end_date">Event end date: </label>
          <input name="end_date" id="end_date" value={
            this.state.end_date || initialValues.end_date || ''
          } onChange={ this.handleChange } />
        </div>

				<div>
					<label htmlFor="description">Event description: </label>
					<input name="description" id="description" value={
						this.state.description || initialValues.description || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Save</button>
			</form>
		)
	}
}

export default EventForm
