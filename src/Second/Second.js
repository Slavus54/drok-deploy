import React, {Component} from 'react';
import './Second.css';
import Input from '../Input/Input';

export default class Second extends Component {
	constructor () {
		super();
		this.state = {
			id: 'qu'
		}
	}
	getBack () {
		this.props.history.push({pathname: '/'}) 
	}
	InputHand (event) {
		console.log(event.target.value);
	}
	render () {
		console.log(this.props);
		const input1 = <Input label="1" ChangeInputHandler={this.InputHand} lab="label" id="inp"/>
		const input2 = <Input label="2" ChangeInputHandler={this.InputHand} lab="label" id="inp"/>
		const input3 = <Input label="3" ChangeInputHandler={this.InputHand} lab="label" id="inp"/>
		return (
			<div className="second">
			<h3>Second page</h3>
			<p>Введите вопрос</p>
			<input type="text" id={this.state.id}></input>	
			<div className="variants">
			{ input1 }
			{ input2 }
			{ input3 }
			</div>
			<button id="butBack" onClick={this.getBack.bind(this)}>Вернуться на Главную</button>
			</div>
		);
	}
}
