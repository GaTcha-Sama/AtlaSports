import React from 'react'
import '../styles/Contact.scss'
import Form from '../components/Contact/Form'

function Contact() {
  return (
    <div className='contact'>
        <h1 className='contact__title'>Contact me !</h1>
        <Form />
    </div>
  )
}

export default Contact