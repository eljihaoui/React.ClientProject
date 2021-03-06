import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((contact) => contact.id !== action.payload) //payload : data
            };
        case 'ADD_CONTACT':
            return {
                contacts: [action.payload, ...state.contacts]
            };
        case 'EDIT_CONTACT':
            return {
                contacts: state.contacts.map((contact) => contact.id === action.payload.id ? contact = action.payload : contact)
            };
        default: return state;
    }
}
export class Provider extends Component {
    state = {
        contacts: [
            // { id: 1, name: "Mesbahi omar", tel: "12323213123123", email: "ALI@gmail.com" },
            // { id: 2, name: "jamal larwi", tel: "17676767676", email: "MAJID@gmail.com" },
            // { id: 3, name: "omar jhaoui", tel: "0909RTT12323213", email: "KAMAL@gmail.com" },
            // { id: 4, name: "mohamed zakari", tel: "0909RTT1232213", email: "iman@gmail.com" }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }
    componentDidMount() { // in loading Component au chargement du Component
        console.log('Component Context will Monted');
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => this.setState({ contacts: res.data }))
            .catch(error => console.error(error))
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer; // qui va nous permet de consommer les données (state)