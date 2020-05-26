import React, {Component} from 'react';
import './Product.css';

export default class Product extends Component {
	constructor () {
		super();
		this.state = {

		}
	}
	send () {
		var i = 0;
		var product = document.getElementsByClassName('product');

		for (i=0; i<product.length; i++) {
			product[i].addEventListener('click', function () {
				var basket = document.getElementById('basket');
				basket.appendChild(this);
			});
		}

	}
	clean () {
		var basket = document.getElementById('basket');
		basket.innerHTML = '';
	}
	render () {
		
		return (
			<div className="products">
			<p className="product" onClick={this.send}>{this.props.content1}</p>
			<p className="product" onClick={this.send}>{this.props.content2}</p>
			<p className="product" onClick={this.send}>{this.props.content3}</p>
			<div id="basket"></div>
			<button id="cleanBut" onClick={this.clean}>Очистить корзину</button>	
			</div>
		);
	}
}