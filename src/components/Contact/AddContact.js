import Axios from 'axios';
import React, { Component } from 'react';
import TextInputGroup from '../helpers/TextInputGroup';
import { Consumer } from './context';
class AddContact extends Component {
    state = {
        name: "",
        phone: "",
        email: "",
        errors: {}
    }
    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submit = (dispatch, size, e) => {
        e.preventDefault();
        const { name, phone, email } = this.state;
        if (name === "") {
            this.setState({
                errors: { name: "the name is required" }
            })
            return;
        }
        if (phone === "") {
            this.setState({
                errors: { phone: "the phone is required" }
            })
            return;
        }
        if (email === "") {
            this.setState({
                errors: { email: "the email is required" }
            })
            return;
        }
        console.log(this.state);
        const newContact = {
            name,
            email,
            phone
        }
        Axios.post('https://jsonplaceholder.typicode.com/users', newContact)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: "ADD_CONTACT",
                    payload: res.data //Contact Object after persisting in database
                });
            }).catch(error => console.log(error))

        this.setState({
            name: '',
            phone: '',
            email: '',
            errors: {}
        })
        this.props.history.push('/');

    }
    render() {
        const { name, phone, email, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div style={{ textAlign: "left" }}>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Add Cantact</h4>
                                    <div className="card-text">
                                        <form onSubmit={this.submit.bind(this, dispatch, value.contacts.length)}>
                                            <TextInputGroup
                                                label="Nom et Prénom :"
                                                type="text"
                                                name="name"
                                                value={name}
                                                onChange={this.onChangeInput}
                                                error={errors.name}
                                            />
                                            <TextInputGroup
                                                label="Téléphone :"
                                                type="text"
                                                name="phone"
                                                value={phone}
                                                onChange={this.onChangeInput}
                                                error={errors.phone}
                                            />
                                            <TextInputGroup
                                                label="Email :"
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={this.onChangeInput}
                                                error={errors.email}
                                            />
                                            <button type="submit" className="btn btn-success">Save</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact