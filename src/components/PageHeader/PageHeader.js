import React, { Component } from 'react';
import './PageHeader.css';

import { FaBars } from 'react-icons/fa';
class PageHeader extends Component {
	render() {
		return (
			<header>
				<div className="nav">
					<div className="nav-header">
						<div className="nav-title">Flight Search Engine</div>
					</div>
					<div className="nav-btn">
						<label htmlFor="nav-check">
							<FaBars />
						</label>
					</div>
					<input type="checkbox" id="nav-check" />
					<div className="nav-links">
						<a href="#">Sign In</a>
						<a href="#">Sign Up</a>
					</div>
				</div>
			</header>
		);
	}
}

export default PageHeader;
