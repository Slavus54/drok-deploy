import React, {Component} from 'react';
import './Select.css';

export default class Select extends Component {
	constructor () {
		super();
		this.state = {
			main : 'select'
		}
	}	
	render () {
		return (
			<div className={this.state.main}>
			<label>{this.props.label}</label>
			<select value={this.props.Answer} 
			onChange={this.props.onChange}>
			{this.props.options.map((option, index) => {
				return (
					<option 
					value={option.value} 
					key={index}>
					{option.text}
					</option>
				)
			})}
			</select>
			</div>
		);
	}
} 