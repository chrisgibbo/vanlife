import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Link to="/" className="link-button">Return Home</Link>
    </div>
  )
}

export default NotFound