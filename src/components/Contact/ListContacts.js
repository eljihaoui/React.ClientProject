import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from './context';
export default class ListContacts extends Component {

    deleteContact(id) {
        console.log("deleteContactFromChild called ....")
        const { contacts } = this.state;
        const newList = contacts.filter((contact) => contact.id !== id);
        this.setState({
            contacts: newList
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title text-left">List Contacts</h4>
                    <div className="card-text">
                        <Consumer>
                            {value => (
                                <div>
                                    {value.contacts.map((contact) => (
                                        <Contact
                                            key={contact.id}
                                            data={contact} // data is a object that contains (tel,email,name,id)
                                            deleteContactFromChild={this.deleteContact.bind(this, contact.id)}
                                        />
                                    ))}
                                </div>
                            )}
                        </Consumer>

                    </div>
                </div>
            </div>


        )
    }
}
