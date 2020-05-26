import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, sub, number, change, drop} from '../action';
import './Counter.css';

class Counter extends Component {
	constructor () {
		super();
		this.state = {
			style: 'main'
		} 
	}
	getBack () {
		this.props.history.push({pathname: '/'});
	}
	render () {
		return (
			<div className={this.state.style}>
			<h2>Счетчик: <b>{this.count}</b></h2>
			<h2><b>{this.props.who}</b><b>{this.props.right}</b></h2>
			<button onClick={this.props.onAdd} className="butCount">Добавить 1</button>
			<button onClick={this.props.onSub} className="butCount">Вычесть 1</button>
			<input onChange={this.props.changeIt.bind(this)}></input>
			<button onClick={this.props.onAddNumber.bind(this, 3)} className="butCount">Умножить на 3</button>
			<button onClick={this.props.dropOff} className="butCount">Сбросить</button>
			<button onClick={this.getBack.bind(this)} className="butCount">Назад</button>
			</div>
		);
	}
}
function maxState (state) {
	return {
		count: state.count,
		right: state.right,
		who: state.who
	}
}
function maxDispath (dispatch) {
	return {
		onAdd: () => dispatch(add()),
		onSub: () => dispatch(sub()),
		onAddNumber: num => dispatch(number(num)),
		changeIt: event => dispatch(change(event)),
		dropOff: () => dispatch(drop())
	}
}
export default connect(maxState, maxDispath)(Counter)