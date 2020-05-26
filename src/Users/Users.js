import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Users.css';
import Select from '../Select/Select'; 

class Users extends Component {
	constructor () {
		super();
		this.state = {
			id : 1
		}
	}
	fuck () {
		alert('I will kiss her');
	};
	getBack () {
		this.props.history.push({pathname: '/'}) 
	};
	SelectChange = event => {
		 this.setState({id: +event.target.value})
	}
	//function handler (event) {
		//var girl = document.querySelectorAll('.girl');
		//var on = event.target.value;
		//var i = 0;
		//console.log(on);
		//girl[0].classList.toggle('girl_active');
	
		//for (i=0; i<girl.length; i++) {
			//var index = girl[i].getAttribute('data-tab');
			//console.log(index);
			//index.classList.toggle('girl_active');
		//} 
	
	//}
	render () {
	const select = <Select options={[{text: 1, value: 1},{text: 2, value: 2},{text: 3, value: 3}]} label="Выберите наиболее красивую девушку" Answer={this.state.id} onChange={this.SelectChange}/>
	return (
		<div className="users-main">
		<li><Link className="girl" data-tab="1" onClick={this.fuck.bind(this)} to={{pathname: '/users/id1'}}>Olga</Link></li>
		<li><Link className="girl" data-tab="2" onClick={this.fuck.bind(this)} to={{pathname: '/users/id2'}}>Irina</Link></li>
		<li><Link className="girl" data-tab="3" onClick={this.fuck.bind(this)} to={{pathname: '/users/id3'}}>Arina</Link></li>
		<div className="inputs">
		<li><input  className="inp" data-tab="1" type="checkbox"></input></li>
		<li><input  className="inp" data-tab="2" type="checkbox"></input></li>
		<li><input  className="inp" data-tab="3" type="checkbox"></input></li>
		{ select }
		</div>
		<button id="butBackUsers" onClick={this.getBack.bind(this)}>Вернуться на Главную</button>
		</div>
	);
}
}
export default Users