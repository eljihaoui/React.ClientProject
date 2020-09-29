import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
import './Contact.css'
import Axios from 'axios';
import { Link } from 'react-router-dom';
class Contact extends Component {
    state = {
        showMgsToggle: true
    }
    showMessage(msg) {
        //this.state.showMgsToggle=false;  not correct
        console.log(msg)
        this.setState({
            showMgsToggle: !this.state.showMgsToggle
        });
    }
    onDelete = (id, dispatch) => {  // arrow function is oblgatiore // simple function not work
        console.log("on delete . . . . . . . . . . . . . .")
        Axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
            .then(res => {
                dispatch({
                    type: "DELETE_CONTACT",
                    payload: id
                })
            }).catch(error => console.error(error));

        //this.props.deleteContactFromChild();
    }
    // in react call function without ()
    render() {
        const { id, name, phone, email } = this.props.data;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div>
                            <h4>
                                {id} - {name}
                                <i onClick={this.showMessage.bind(this, name)} className="fa fa-sort-down" style={{ cursor: "pointer" }} ></i>
                            </h4>
                            {(this.state.showMgsToggle) ? (
                                <ul className="list-group" >
                                    <li className="list-group-item">{phone}</li>
                                    <li className="list-group-item">{email}</li>
                                </ul>
                            ) : null}
                            <Link to={`/Contact/edit/${id}`}>
                            <i className="fa fa-pencil btn btn-info" style={{color:'orange',float:"right", cursor:"pointer",margin:"5px"}}></i>
                            </Link>
                            <i className="fa fa-times btn btn-warning" style={{ color: "red", float: "right", cursor: "pointer",margin:"5px" }}
                                onClick={this.onDelete.bind(this, id, dispatch)}
                            ></i>
                            <br/>
                            <hr />
                        </div >
                    )
                }}
            </Consumer>
        )
    }
}
Contact.propTypes = {
    data: PropTypes.object.isRequired
}
export default Contact;