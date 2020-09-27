import React, { Component } from 'react'
class AddContact extends Component {
    state = {
        name: "",
        tel: "",
        email: ""
    }

    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        const { name, tel, email } = this.state;

        return (
            <div style={{ textAlign: "left" }}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Add Cantact</h4>
                        <div className="card-text">
                            <form onSubmit={this.submit}>
                                <div className="form-group">
                                    <label htmlFor="name">Nom et Prénom</label>
                                    <input type="text" name="name"
                                        defaultValue={name} onChange={this.onChangeInput} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tel">Télephone</label>
                                    <input type="text" name="tel"
                                        defaultValue={tel} onChange={this.onChangeInput} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Eamil</label>
                                    <input type="text" name="email"
                                        defaultValue={email} onChange={this.onChangeInput} className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-success">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddContact