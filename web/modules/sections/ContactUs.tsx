import React from 'react'
import PropTypes from "prop-types"
// import {useRouter} from 'next/router'

ContactUs.propTypes = {
  data: PropTypes.object
}

export default function ContactUs({data}) {
  // const router = useRouter()

  return (
    <>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="form-name" value="contact" />
      <label>Your Email: <input type="email" name="email"/></label>

      <button type="submit" className='btn'>Send</button>
      {/* {data.buttontext[router.locale]} */}
      </form>
    </>
   
    
  )
}
