import React from 'react'
import '../styles/Error.scss'
import {Link} from 'react-router-dom'

function Error() {
  return (
    <div className='error'>
      <h1 className='error__number'>Error 404</h1>
      <h2 className='error__msg'>Wow ! You're out of bounds !</h2>
      <Link to="/"><p className='error__return'>Back to home page</p></Link>
    </div>
  )
}

export default Error