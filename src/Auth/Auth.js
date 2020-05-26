import React from 'react';
import firebase from 'firebase/app';
import fire from '../Fire';
import {load} from '../action';
import {connect} from 'react-redux';
import Todos from '../Todos';

const Auth = (props) => {
    if (!firebase.apps.length) {
        firebase.initializeApp(fire);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('email-place').value
        const password = document.getElementById('password-place').value
        console.log('sss')
        localStorage.setItem('data1', JSON.stringify({email, password}))
        firebase.auth().createUserWithEmailAndPassword(
            email,
            password
        )
    } 
    console.log(props.items)
    return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" id="email-place" name="email" required/>
            <input type="text" id="password-place" name="password" required/>
            <input type="submit" value="Register" />
        </form>
        <button onClick={props.onSaga} className="saga-but">Get SAGA</button>
        <Todos />
    </div>
    );
}
function maxDispath (dispatch) {
	return {
        onSaga: () => dispatch(load())
	}
}

export default connect(null, maxDispath)(Auth)