import React from 'react'

const formatDate = datetime =>
	new Date(datetime).toDateString()

class Event extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				event: {}
			}
		}

	render() {
		return (
		<div className="event">
			<h2 className="event-title">{this.state.event.title}</h2>
			<div className="event-datetime">{formatDate(this.state.event.start_datetime)}</div>
			<div className="event-location">{this.state.event.location}</div>
		</div>
		)
	}
}

export default Event
