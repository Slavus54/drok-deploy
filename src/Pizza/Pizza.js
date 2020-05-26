import React, {Component} from 'react';
import './Pizza.css'; 

export default class Pizza extends Component {
	
	OnDoing (el) {
		var Placerer = {};
		let bascet = document.getElementsByClassName('basc');
		let input = document.getElementById('topper');
		let but = document.getElementsByClassName('pizza-but');
		let i, place;
		place = el.target;
		console.log(place);
		Placerer.la = place;
		// for (i=0; i<=but.length; i++) {
		// 	if (but[0].attributes['data-tab'].value == 1) {
		// 		console.log(el.target);
		// 	}
		// }
		// for (i=0; i<=bascet.length; i++) {
  //       	if (bascet[i].getAttribute('data-tab') == but.getAttribute('data-tab')) {
  //       		bascet[i].innerHTML = bascet[i].innerHTML;
  //       	}
  //       }
		
		
	}

	OnRemaster () {
		var Placerer = {};
		let bascet = document.getElementsByClassName('basc');
		//let attr = this.getAttribute('data-tab');
		let input = document.getElementById('topper');
       	let but = document.getElementsByClassName('pizza-but');
        let i;
        let place;
        place = Placerer.la;
        console.log(place);
        for (i=0; i<=bascet.length-1; i++) {
        	if (bascet[0].attributes['data-tab'].value == 1) {
  				bascet[0].innerHTML = input.value;
  				console.log(bascet[i]);
			}
			if (bascet[1].attributes['data-tab'].value == 1) {
  				bascet[1].innerHTML = input.value;
  				console.log(bascet[i]);
			}
        }
	}

	GetBack () {
		this.props.history.push('/');
	}
	render () {
		
		return (
			<div className="main-pizza">
			<span className="pizza-headline">Welcome to School Pizza</span>
			<input id="topper"></input>
			<button onClick={this.OnRemaster.bind(this)}>Submit</button><br />
			<p className="pizza-text">Topping</p>
			<p data-tab="1" id="pizza-basc1" className="basc">Peperoni</p>
			<p className="pizza-text">Topping</p>
			<p data-tab="2" id="pizza-basc2" className="basc">Peperoni</p>
			<button onClick={this.OnDoing.bind(this)} data-tab="1" id="first" className="pizza-but">Edit Pizza</button>
			<button onClick={this.OnDoing.bind(this)} data-tab="2" id="second" className="pizza-but">Edit Pizza</button>
			<button onClick={this.GetBack.bind(this)} id="BackBut">Вернуться на Главную</button>
			</div>
		);
	}
}