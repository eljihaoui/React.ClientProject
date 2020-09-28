import React from 'react';
import PropTypes from 'prop-types';// impt + enter
import "./navbar2.css";
import { Link } from 'react-router-dom';
const NavBar2 = (props) => {
    const { title } = props; //  this object propos you can name it as you like
    return (
        <nav className="navbar navbar-expand-sm navbar-green bg-green">
            <Link className="navbar-brand" to="/">{title}</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">List Contacts</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/contact/add">Add Contact</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

NavBar2.defaultProps = {
    title: "mon titre from default",
    width: "2000px"
}

NavBar2.propTypes = {
    title: PropTypes.string.isRequired
}
export default NavBar2