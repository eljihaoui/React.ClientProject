import React, { Component } from 'react'
import Contact from './Contact';

export default class ListContacts extends Component {
    state = {
        contacts: [
            { id: 1, name: "mohamed MESBAHI", tel: "12323213123123", email: "ALI@gmail.com" },
            { id: 2, name: "mohamed JAWHARI", tel: "17676767676", email: "MAJID@gmail.com" },
            { id: 3, name: "mohamed KARAMI", tel: "0909RTT12323213", email: "KAMAL@gmail.com" }
        ]
    }
    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map((contact) => (
                    <Contact info={contact} /> // info is object that contains (tel,email,name,id)
                ))}
            </div>
        )
    }
}
