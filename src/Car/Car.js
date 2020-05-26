import React, {Component} from 'react';
import './Car.css';

export default class Car extends Component {
	
	render() {
		return (
			<div className="cars">
			<h5>Hi, {this.props.name}</h5>
			<p>Our car is {this.props.carname}</p>
			{this.props.children}
			</div>
		);
	}
} 