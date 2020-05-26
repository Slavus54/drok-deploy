import React from 'react';

export default function Good (props) {

	return (
		<div className="goods">
		<h4 onClick={props.Hand}>Товар: {props.name}</h4>
		<p>Количество: {(Math.random()*100).toFixed()}</p>
		{props.children}
		</div>
	);


}