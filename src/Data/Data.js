import React, {Component} from 'react';

export default class Data extends Component {
    getBack() {
       this.props.history.push({pathname: '/'}) 
    }
    render () {
	     function data () {
  		    fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  		    .then(response => response.json())
  		    .then(commits => alert(commits[0].commit.author.name))
  	   }	
  	   async function send () {
  		    let user = {
  			   name: 'John',
  			   surname: 'Smith'
		    };
		    let userka = {
  			   name: 'Arina',
  			   status: 'Pretty and ready to fuck'
		    };

		    let response = await fetch('https://reqres.in/api/users', {
  			   method: 'POST',
  			   headers: {
    		    'Content-Type': 'application/json;charset=utf-8'
  		    },
  			   body: JSON.stringify({userka})
		    });

		    let result = await response.json();
		    alert(JSON.stringify(userka));
  	   }
	return (
		
  		<div>
		<p onClick={data}>get data</p>
		<p onClick={send}>send data</p>
    <button id="butBack" onClick={this.getBack.bind(this)}>Вернуться на Главную</button>
  		</div>
	);
}
}
	