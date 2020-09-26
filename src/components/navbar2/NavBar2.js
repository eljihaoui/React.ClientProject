import React from 'react';
import PropTypes from 'prop-types';// impt + enter
import "./navbar2.css";
const NavBar2 = (props) => {
    const { title } = props; //  this object propos you can name it as you like
    return (
      <nav className="navbar navbar-expand-sm navbar-green bg-green">
          <a className="navbar-brand" href="w">{title}</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                      <a className="nav-link" href="w">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="w">Link</a>
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