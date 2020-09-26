import React, { Component } from 'react'

class Contact extends Component {

    render() {
        const { id, name, tel, email } = this.props;
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">{id}</li>
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{tel}</li>
                    <li className="list-group-item">{email}</li>
                </ul>
            </div>
        )
    }
}
export default Contact;