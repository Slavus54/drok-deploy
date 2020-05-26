import React, {Component} from 'react';
import './Input.css';

export default class Input extends Component {
	constructor () {
		super();
		this.state = {
			main: 'inputComp'
		}
	}
	render () {
		return (
			<div className={this.state.main}>
			<label id={this.props.lab}>Вариант {this.props.label}</label>
			<input onChange={this.props.ChangeInputHandler} id={this.props.id} type="text"></input>
			</div>
		);
	}
}