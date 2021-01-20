
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='section error-page'>
        <div className = 'error-container'>
            <h1> Oops! This page doesnt exist! </h1>
            <Link to ="/" className ='btn btn-primary'> Home Page </Link>
        </div>
    </div>
  )
}

export default Error;
