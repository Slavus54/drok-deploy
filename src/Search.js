import React, {Component} from 'react';

class Search extends Component {
    constructor () {
        super();
        this.items = [
            'Slava',
            'Andrew',
            'Alex',
            'Kostya',
            'Roma',
            'Anton',
            'Alexander'
        ];
        this.state = {
            suggestions: [],
            search : ''
        }
    }
    render () {
        // const onTextChanged = (e) => {
        //     let value = e.target.value;
		//     if (value.length === 0) {
        //         this.setState({
        //             suggestions: []
        //         })
		//     } else {
		// 	const regex = new RegExp(`^${value}`, 'i')
		// 	const sugg = this.items.sort().filter(v => regex.test(v))
		// 	this.setState(() => ({suggestions: sugg}))
		//     }
        // }
        // const onRenderSugg = () => {
        //     const suggestions = this.state;
        //     if (suggestions.length === 0) {
        //         return null;
        //     }
        //     return (
        //         <ul>
        //         {suggestions ? suggestions.map((item) => <li>{item}</li>): null}
        //         </ul>
        //     );
        // }
        const updateSearch = (e) => {
            this.setState({search: e.target.value})
        }
        let filteredContacts = this.items.filter((contact) => {
            return contact.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })
        return (
            <div>
                <input type="text" value={this.state.search} onChange={updateSearch} placeholder="Search a man"></input>
                <ul>{filteredContacts.map((text) => <li>{text}</li>)}</ul>
            </div>
        );
    }
}

export default Search