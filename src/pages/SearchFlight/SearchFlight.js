import React, { Component } from 'react';

import Select from 'react-select';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import InputRange from 'react-input-range';

import { FaMinus, FaPlus } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-input-range/lib/css/index.css';

import './SearchFlight.css';

const options = [
	{
		value: 'AHM',
		label: 'Ahmedabad'
	},
	{
		value: 'DEL',
		label: 'Delhi'
	},
	{
		value: 'HYD',
		label: 'Hydrabad'
	},
	,
	{
		value: 'MUM',
		label: 'Mumbai'
	},
	{
		value: 'PNQ',
		label: 'Pune'
	}
];
class SearchFlight extends Component {
	constructor(props) {
		super(props);

		this.state = {
			price: {
				min: 500,
				max: 5000
			}
		};
	}

	handleTrip(tab) {
		let returnTrip = tab === 1 ? false : true;
		this.props.handleTrip(returnTrip);
	}

	originCityChangeHandler = (originCity) => {
		this.props.originCityChangeHandler(originCity);
		console.log(`Option selected:`, originCity);
	};

	destinationCityChangeHandler = (destinationCity) => {
		this.props.destinationCityChangeHandler(destinationCity);
		console.log(`Option selected:`, destinationCity);
	};

	departureDateChangeHandler(date) {
		this.props.departureDateChangeHandler(date);
	}

	returnDateChangeHandler(date) {
		this.props.returnDateChangeHandler(date);
	}

	// searchHandller(event) {
	// 	debugger;
	// 	const { store } = this.context;
	// 	store.dispatch({
	// 		type: 'ALL',
	// 		returnTrip: this.props.state.returnTrip,
	// 		originCity: this.props.originCity.value,
	// 		destinationCity: this.props.destinationCity.value,
	// 		departureDate: this.props.state.departureDate,
	// 		returnDate: this.props.state.returnDate,
	// 		passengers: this.props.state.passengers,
	// 		price: this.props.state.price
	// 	});
	// 	event.preventDefault();
	// }

	// refineSearch(price) {
	// 	const { store } = this.context;
	// 	store.dispatch({
	// 		type: 'PRICE_FILTER',
	// 		price: this.state.price
	// 	});
	// }
	render() {
		const { originCity, destinationCity } = this.state;
		return (
			<div className="search-box container">
				<div className="search-title"> Search Your Flight </div> {' '}
				<form onSubmit={this.props.searchHandller.bind(this)}>
					<div className="flex-container">
						<ul className="tabs">
							<li
								className={'tab' + (this.props.state.returnTrip ? '' : ' active')}
								onClick={this.handleTrip.bind(this, 1)}
							>
								<span> One way </span> {' '}
							</li>{' '}
							{' '}
							<li
								className={'tab' + (this.props.state.returnTrip ? ' active' : '')}
								onClick={this.handleTrip.bind(this, 2)}
							>
								<span> Return </span> {' '}
							</li>{' '}
							{' '}
						</ul>{' '}
						{' '}
						<div className="flex-1">
							<div className="input-control">
								<Select
									value={this.props.state.originCity}
									onChange={this.originCityChangeHandler.bind(this)}
									options={options}
									placeholder="Enter Origin City"
								/>
								<label className="label"> Origin city </label> {' '}
							</div>{' '}
							{' '}
						</div>{' '}
						{' '}
						<div className="flex-1">
							<div className="input-control">
								<Select
									value={this.props.state.destinationCity}
									onChange={this.destinationCityChangeHandler.bind(this)}
									options={options}
									placeholder="Enter Destination City"
								/>
								<label className="label"> Destination city </label> {' '}
							</div>{' '}
							{' '}
						</div>{' '}
						{' '}
						<div className="flex-1">
							<div className="input-control">
								<DatePicker
									className="datepicker"
									selected={this.props.state.departureDate}
									onChange={this.departureDateChangeHandler.bind(this)}
								/>{' '}
								 <label className="label"> Departure date </label> {' '}
							</div>{' '}
							{' '}
						</div>{' '}
						{' '}
						{this.props.state.returnTrip && (
							<div className="flex-1">
								<div className="input-control">
									<DatePicker
										className="datepicker"
										selected={this.props.state.returnDate}
										onChange={this.returnDateChangeHandler.bind(this)}
									/>{' '}
									 <label className="label"> Return date </label> {' '}
								</div>{' '}
								{' '}
							</div>
						)}{' '}
						 {' '}
						<div className="flex-1">
							<div className="input-control">
								<div className="passengers">
									<span className="passenger-count">
										{' '}
										  {this.props.state.passengers} - passenger  {' '}
									</span>{' '}
									{' '}
									<button type="button" className="btn" onClick={this.props.decrementPassengers}>
										<FaMinus />
									</button>{' '}
									{' '}
									<button type="button" className="btn" onClick={this.props.incrementPassengers}>
										<FaPlus />
									</button>{' '}
									{' '}
								</div>{' '}
								 <label className="label"> No of passengers </label> {' '}
							</div>{' '}
							{' '}
						</div>{' '}
						{' '}
						<div className="flex-1">
							<div className="input-control range-control">
								<InputRange
									className="price-range"
									maxValue={10000}
									minValue={0}
									formatLabel={(price) => `₹ ${price}`}
									value={this.state.price}
									onChange={(price) => {
										this.setState({
											price
										});
										this.props.state.price = price;
									}}
									onChangeComplete={(price) => console.log(price)}
								/>{' '}
								 <label className="label"> Price range </label> {' '}
							</div>{' '}
							{' '}
						</div>{' '}
						{' '}
						<div className="flex-1">
							<div className="input-control">
								<button className="btn btn-large block" type="submit">
									Search  {' '}
								</button>{' '}
								{' '}
							</div>{' '}
							{' '}
						</div>{' '}
						{' '}
					</div>{' '}
					{' '}
				</form>{' '}
				{' '}
			</div>
		);
	}
}

export default SearchFlight;
