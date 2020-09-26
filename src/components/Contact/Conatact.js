
import React, { Component } from 'react'

class Conatact extends Component {
    render() {
        const { name, tel, email } = this.props; // because Class contact contain by default obejct props
        return (
            <div>
                <h1>Liste contact</h1>
                <ul class="list-group">
                    <li class="list-group-item">Conatact : {name}</li>
                    <li class="list-group-item">{tel}</li>
                    <li class="list-group-item">{email}</li>
                </ul>
            </div>
        )
    }
}
Conatact.defaultProps = {
    name: "mohamed",
    tel: "00000000000",
    email: "Mail@email.com"
}
export default Conatact