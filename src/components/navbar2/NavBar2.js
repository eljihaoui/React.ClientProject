import React from 'react'
import PropTypes from 'prop-types' // impt + enter

const NavBar2 = (props) => {
    const { title, width } = props; //  this object propos you can name it as you like
    return (
        <div>
            <p> {title} : {width}</p>
        </div>
    )
}

NavBar2.defaultProps={
    title : "mon titre from default",
    width : "2000px"
}

NavBar2.propTypes ={
    title : PropTypes.string.isRequired
}
export default NavBar2