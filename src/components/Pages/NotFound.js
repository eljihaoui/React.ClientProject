import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <h1>Page not found 404</h1>
            <Link to='/'>Back Home</Link>
        </div>
    )
}
