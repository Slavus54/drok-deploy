import {ADD, SUB, NUMBER, CHANGE, DROP, LOAD, PUT, TODOS, SAVE} from './actionTypes';

export function add() {
	return {
		type: ADD
	}
}
export function sub() {
	return {
		type: SUB
	}
}
export function number(num) {
	return {
		type: NUMBER,
		pay: num
	}
}
export function change(event) {
	console.log(typeof event.target.value);
	return {
		type: CHANGE,
		val: event.target.value
	}
}
export function drop() {
	return {
		type: DROP
	}
}
export const load = () => {
	return {
		type: LOAD
	}
}
export const putData = (data) => {
	return {
		type: PUT,
		payload: data
	}
}
export const addTodos = (event) => {
	return {
		type: TODOS,
		payload: event.target.value
	}
}
export const saveTodos = () => {
	return {
		type: SAVE
	}
}