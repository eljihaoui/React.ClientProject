import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    onDelete = () => {  // arrow function is oblgatiore // simple function not work
        console.log("on delete .....")
        this.props.deleteContactFromChild();
    }
    // in react call function without ()
    render() {
        const { id, name, tel, email } = this.props.data;
        return (
            <div>
                <h4>
                    {id} - {name}
                    <i onClick={this.showMessage.bind(this, name)} className="fa fa-sort-down" style={{ cursor: "pointer" }} ></i>
                    <i className="fa fa-times" style={{ color: "red", float: "right", cursor: "pointer" }}
                        onClick={this.onDelete}
                    ></i>
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
Contact.propTypes = {
    data: PropTypes.object.isRequired,
    deleteContactFromChild: PropTypes.func.isRequired
}
export default Contact;