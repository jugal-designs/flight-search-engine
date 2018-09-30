import React, { Component } from 'react';
import moment from 'moment';

import FlightLogo from './FlightLogo';
import { FaPlane } from 'react-icons/fa';

import './FlightDetails.css';
class componentName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isReturnTrip: true,
			bookingText: 'Book this flight'
		};
	}
	render() {
		let flight = this.props.flight;
		flight.depart_time = moment(flight.depart_date).format('DD-MM-YY | hh:mm A');
		flight.arrive_time = moment(flight.arrive_date).format('DD-MM-YY | hh:mm A');

		let returnTrip = flight.return_trip;
		returnTrip.depart_time = moment(returnTrip.depart_date).format('DD-MM-YY | hh:mm A');
		returnTrip.arrive_time = moment(returnTrip.arrive_date).format('DD-MM-YY | hh:mm A');

		return (
			<div className="flex-box-2">
				<div className="card">
					<div className="flex-container">
						<div className="flight-details">
							<div className="flex-1">
								<div className="flight-price">
									₹ {flight.price + flight.return_trip.price}
									<span className="journey-type">Return Journy</span>
								</div>
							</div>
							<div className="flex-1 inline-flex">
								<div className="departure">
									<div className="flight-number">{flight.number.toUpperCase()}</div>
									<div className="flight-direction">
										{flight.from_code} <FaPlane /> {flight.to_code} @ ₹ {flight.price}
									</div>
									<div className="flight-time">
										Depart: <span>{flight.depart_time}</span>{' '}
									</div>
									<div className="flight-time">
										Arrive: <span>{flight.arrive_time}</span>{' '}
									</div>
								</div>
								<div className="return">
									<div className="flight-number">{returnTrip.number.toUpperCase()}</div>
									<div className="flight-direction">
										{returnTrip.from_code} <FaPlane /> {returnTrip.to_code} @ ₹ {returnTrip.price}
									</div>
									<div className="flight-time">
										Depart: <span>{returnTrip.depart_time}</span>{' '}
									</div>
									<div className="flight-time">
										Arrive: <span>{returnTrip.arrive_time}</span>{' '}
									</div>
								</div>
							</div>
						</div>
						<div className="flight-logo">
							<div className="logo flex-1">
								<div className="flight-logo">
									<FlightLogo airlines={flight.airlines} />
								</div>
								<div>
									<button
										className="btn btn-info"
										onClick={() => this.setState({ bookingText: 'Booked' })}
									>
										{this.state.bookingText}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default componentName;
