import React, { Component } from 'react';
import './Todos.css';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }
  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
    console.log(this.state.items)
  }
  render() {
    return (
      <div>
        <form className="Todos" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <ul>
    {
      this.state.items.map((it, i) => <li key={i}>{it}</li>)
    }
  </ul>
      </div>
    );
  }
}