import Axios from 'axios';
import React, { Component } from 'react';
import TextInputGroup from '../helpers/TextInputGroup';
import { Consumer } from './context';
class EditContact extends Component {

    state = {
        name: "",
        phone: "",
        email: "",
        errors: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    name: res.data.name,
                    phone: res.data.phone,
                    email: res.data.email
                })
            }).catch(error => console.log(error));
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
        const upContact = {
            name,
            email,
            phone
        }
        const id = this.props.match.params.id;
        Axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, upContact)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: "EDIT_CONTACT",
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
        // console.log(this.state);
        const id = this.props.match.params.id;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div style={{ textAlign: "left" }}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-danger">Edit Cantact N° : {id}</h5>
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
                                            <button type="submit" className="btn btn-warning">Edit Contact</button>
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

export default EditContact