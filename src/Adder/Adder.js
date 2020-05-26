import React, {Component} from 'react';
import './Adder.css';

export default class Adder extends Component {
	constructor () {
		super();
		this.state = {
			but: 'form-but',
			popupen: 'popup',
			close: 'close-sh'
		};
	}
	OnAddHandler () {
		setTimeout(() => {
			this.setState({popupen : 'popup_active'});
		}, 200);
	}
	OnCloseHandler () {
		setTimeout(() => {
			this.setState({popupen : 'popup'});
			let bascet = document.getElementById('bascet');
		}, 200);
	
	}
	OnSendHandler () {
		let bascet = document.getElementById('bascet');
		let input = document.getElementById('data-input');
		let valu = input.value;
		valu.toString();
		bascet.innerHTML += valu+`<div id="OnDel">&times;</div>`+'<br />';
		//bascet.appendChild(valu);
		
	}

	render () {
		let del = document.getElementById('OnDel');
		if (del) {
			del.addEventListener('click', function () {
			let bascet = document.getElementById('bascet');
			bascet.innerHTML = ' ';
			});
		}
		
		return (
			<div className="adder">
			<button className={this.state.but} onClick={this.OnAddHandler.bind(this)} Id="active-but">Добавить продукт</button>
			<div className={this.state.popupen}>
			<div className={this.state.close} onClick={this.OnCloseHandler.bind(this)}>&times;</div>
			<label>Введите название продукта</label>
			<input Id="data-input" type="text"></input>
			<button className={this.state.but} onClick={this.OnSendHandler.bind(this)} Id="send-but">Добавить</button>
			</div>
			<p Id="bascet"></p>
			</div>
		);
	}
}
