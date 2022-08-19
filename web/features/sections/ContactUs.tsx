import React from 'react'
import PropTypes from 'prop-types'
import {useRouter} from 'next/router'

ContactUs.propTypes = {
  data: PropTypes.object,
}

export default function ContactUs({data}) {
  const router = useRouter()

  return (
    <div className="row">
      <div className="col-md-5">
        <h2>{data.title[router.locale]}</h2>
        <pre>{data.content[router.locale]}</pre>
      </div>
      <div className="col-md-7">
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          {/* You still need to add the hidden input with the form name to your JSX form */}
          <input type="hidden" name="form-name" value="contact" />

          <label>What is your Email?</label>
          <input type="email" name="email" className={'w-100'} placeholder="Email" />

          <label>Please fill in the details </label>
          <textarea name="content" className={'w-100'} placeholder="Message" />

          <button type="submit" className="btn d-block">
            Send <span className="btn-carrot">›</span>
          </button>
          {/* {data.buttontext[router.locale]} */}
        </form>
      </div>
    </div>
  )
}
