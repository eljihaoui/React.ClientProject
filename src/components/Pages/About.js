import React from 'react'

export default function About(props) {
    return (
        <div>
            {props.match.params.id}
            <h2>Component About </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid animi dolorem vitae odit, magnam voluptas suscipit veniam atque? Exercitationem, delectus.</p>
        </div>
    )
}
