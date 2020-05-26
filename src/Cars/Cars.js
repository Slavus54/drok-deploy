import React, {Component} from 'react';
import './Cars.css';
import Car from '../Car/Car';

export default class Cars extends Component {
	constructor () {
		super();
		this.state = {
			mainCars: 'mainCar'
		}
	}
	getBack () {
		this.props.history.push({pathname: '/'});
	}
	
	render () {
		return (
			<div className={this.state.mainCars}>
				<Car name="Vyacheslav" carname="Tesla Model S"><p style={{color: 'red'}}>Great</p></Car>
 				<Car name="Vyacheslav" carname="VAZ 2105" />
 				<Car name="Vyacheslav" carname="TOYOTA CORONA" />
				<button id="butBack" onClick={this.getBack.bind(this)}>Вернуться на Главную</button>
			</div>
		);
	}
}