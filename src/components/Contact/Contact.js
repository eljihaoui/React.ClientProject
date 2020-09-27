import React, { Component } from 'react'
import './Contact.css'
class Contact extends Component {
    state = {
        showMgsToggle: true
    }
    showMessage(msg) {
        //this.state.showMgsToggle=false; // not correct
        console.log(msg)
        this.setState({
            showMgsToggle: !this.state.showMgsToggle
        });
    }
    // in react call function without ()
    render() {
        const { name, tel, email } = this.props.info;
        return (
            <div>
                <h4>
                    {name}
                    <i onClick={this.showMessage.bind(this, name)} className="fa fa-sort-down" ></i>
                </h4>
                {(this.state.showMgsToggle) ? (
                    <ul className="list-group" >
                        <li className="list-group-item">{tel}</li>
                        <li className="list-group-item">{email}</li>
                    </ul>
                ) : null}

                <hr />
            </div >
        )
    }
}
export default Contact;