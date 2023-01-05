import React from 'react'
import { Wrapper } from './ContactStyles'

const Contact = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h2 className='common-heading'>Contact Page</h2>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3020340958437!2d-74.22664237809667!3d4.717505785614157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f780682498145%3A0x76fd765d0a8ffdc0!2sConjunto%20Residencial%20El%20Jardin!5e0!3m2!1ses!2sco!4v1668260519080!5m2!1ses!2sco'
          width='100%'
          height='400'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />

        <div className='contact-form'>
          <form
            action='https://formspree.io/f/xzbwylln'
            method='POST'
            className='contact-inputs'
          >
            <input
              type='text'
              name='username'
              placeholder='Username'
              required
              autoComplete='off'
            />
            <input
              type='email'
              name='email'
              placeholder='E-mail'
              required
              autoComplete='off'
            />
            <textarea
              name='Enter your Message'
              placeholder='Enter your Message'
              cols='30'
              rows='10'
              required
              autoComplete='off'
            />
            <input type='submit' value='Send' />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact
