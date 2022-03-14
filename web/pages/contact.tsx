import React, {ReactElement} from 'react'
import groq from 'groq'
import PropTypes from "prop-types"
import {useRouter} from 'next/router'

import client from '../client'
import MainLayout from '../modules/layouts/mainLayout'
import Container from '../common/Container'
import HeroHeader from '../modules/sections/HeroHeader'
import ContactUs from '../modules/sections/ContactUs'

export async function getStaticProps() {

  const contactPage = await client.fetch(groq`
      *[_type == "contact-page"] | order(publishedAt desc)
    `)

  return {
    props: {
      contactPage
    }
  }
}



const Contact = ({contactPage}) => {
  const router = useRouter()
  const {headersection, formsection} = contactPage[0]

  return (
    <>
      <Container wrapperClass="header-wrapper" className="d-flex flex-column justify-content-center">
        <HeroHeader 
          title={headersection.title[router.locale]}
          subtitle={'Contact the ecotowari team'}
          textAlign="center"
        />
      </Container>
      <Container wrapperClass="min-h-100 d-flex align-items-center bg-2"><ContactUs data={formsection}/></Container>

    </>
  )
}

Contact.propTypes = {
  contactPage: PropTypes.arrayOf(PropTypes.object),
};

// Get the main template for standard pages
Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default Contact;
