import React, { Component } from 'react';
import TextInputGroup from '../helpers/TextInputGroup';
import { Consumer } from './context';
class AddContact extends Component {
    state = {
        name: "",
        tel: "",
        email: "",
        errors: {}
    }
    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submit = (dispatch, size, e) => {
        e.preventDefault();
        const { name, tel, email } = this.state;
        if (name === "") {
            this.setState({
                errors: { name: "the name is required" }
            })
            return;
        }
        if (tel === "") {
            this.setState({
                errors: { tel: "the tel is required" }
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
        dispatch({
            type: "ADD_CONTACT",
            payload: {
                id: size + 1, // next id 
                name: this.state.name,
                email: this.state.email,
                tel: this.state.tel
            }
        });
        this.setState({
            name: '',
            tel: '',
            email: '',
            errors:{}
        })
    }
    render() {
        const { name, tel, email ,errors} = this.state;
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
                                                name="tel"
                                                value={tel}
                                                onChange={this.onChangeInput}
                                                error={errors.tel}
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