import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ContactForm from '../components/contact-form'
import Footer from '../components/footer'
import './contacte-nos.css'

const ContacteNos = (props) => {
  return (
    <div className="contacte-nos-container">
      <Helmet>
        <title>Contacte-nos - Correia de Castro Advogados</title>
        <meta
          property="og:title"
          content="Contacte-nos - Correia de Castro Advogados"
        />
      </Helmet>
      <div className="contacte-nos-hero">
        <div className="contacte-nos-fixed-header">
          <Header rootClassName="header-root-class-name"></Header>
        </div>
        <h1 className="contacte-nos-text text2XL">
          Miami Beah is looking different at night!
        </h1>
        <div className="contacte-nos-bg"></div>
      </div>
      <div className="contacte-nos-post-details">
        <div className="contacte-nos-container1">
          <svg
            viewBox="0 0 1170.2857142857142 1024"
            className="contacte-nos-icon"
          >
            <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
          </svg>
        </div>
        <ContactForm rootClassName="contact-form-root-class-name"></ContactForm>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ContacteNos
