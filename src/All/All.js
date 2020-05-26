import React from 'react';

export default function All (props) {
	return (
		<div style={{textAlign: 'center', color: 'red', marginTop: '10%'}}>
		{props.children}
		</div>
	);
}