import React, {Component} from 'react';
import './Products.css';
import Product from '../Product/Product';
export default class Products extends Component {
	constructor () {
		super();
		this.state = {

		}
	}
	render () {
		return (
			<div className="products">
			<Product content1="1" content2="2" content3="3"/>
			</div>
		);
	}
}