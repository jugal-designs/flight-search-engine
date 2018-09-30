import React, { Component } from 'react';

import moment from 'moment';

import { FaPlane } from 'react-icons/fa';
import PageHeader from '../../components/PageHeader/PageHeader';
import SearchFlight from './SearchFlight';
import ListFlights from './ListFlights';

import './Layout.css';

class Layout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			returnTrip: true,
			originCity: null,
			destinationCity: null,
			departureDate: moment(),
			returnDate: moment().add(1, 'day'),
			passengers: 1,
			price: {
				min: 500,
				max: 5000
			}
		};
	}
	handleTrip(returnTrip) {
		this.setState({ returnTrip });
	}

	originCityChangeHandler = (originCity) => {
		this.setState({
			originCity
		});
		console.log(`Option selected:`, originCity);
	};

	destinationCityChangeHandler = (destinationCity) => {
		this.setState({
			destinationCity
		});
		console.log(`Option selected:`, destinationCity);
	};

	departureDateChangeHandler(date) {
		this.setState({
			departureDate: date
		});
	}

	returnDateChangeHandler(date) {
		this.setState({
			returnDate: date
		});
	}

	incrementPassengers() {
		this.setState({
			passengers: this.state.passengers + 1
		});
	}

	decrementPassengers() {
		if (this.state.passengers > 0) {
			this.setState({
				passengers: this.state.passengers - 1
			});
		}
	}

	searchHandller(event) {
		// 	const { store } = this.context;
		// 	store.dispatch({
		// 		type: 'ALL',
		// 		returnTrip: this.state.returnTrip,
		// 		originCity: this.originCity.value,
		// 		destinationCity: this.destinationCity.value,
		// 		departureDate: this.state.departureDate,
		// 		returnDate: this.state.returnDate,
		// 		passengers: this.state.passengers,
		// 		price: this.state.price
		// 	});
		event.preventDefault();
	}

	// refineSearch(price) {
	// 	const { store } = this.context;
	// 	store.dispatch({
	// 		type: 'PRICE_FILTER',
	// 		price: this.state.price
	// 	});
	// }
	render() {
		return (
			<div>
				<PageHeader />
				<input type="checkbox" id="sidebartoggler" name="" value="" />
				<div className="page-wrap">
					<label htmlFor="sidebartoggler" className="toggle">
						<FaPlane />
					</label>
					<div className="page-content">
						<ListFlights />
					</div>
					<div className="sidebar">
						<SearchFlight
							state={this.state}
							handleTrip={this.handleTrip.bind(this)}
							originCityChangeHandler={this.originCityChangeHandler.bind(this)}
							destinationCityChangeHandler={this.destinationCityChangeHandler.bind(this)}
							departureDateChangeHandler={this.departureDateChangeHandler.bind(this)}
							returnDateChangeHandler={this.returnDateChangeHandler.bind(this)}
							incrementPassengers={this.incrementPassengers.bind(this)}
							decrementPassengers={this.decrementPassengers.bind(this)}
							searchHandller={this.searchHandller.bind(this)}
							//refineSearch={this.refineSearch.bind(this)}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Layout;
