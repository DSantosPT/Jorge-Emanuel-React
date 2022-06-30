import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Map from '../components/map'
import ContactForm from '../components/contact-form'
import Footer from '../components/footer'
import './contactos.css'

const Contactos = (props) => {
  return (
    <div className="contactos-container">
      <Helmet>
        <title>Contactos - Correia de Castro Advogados</title>
        <meta
          property="og:title"
          content="Contactos - Correia de Castro Advogados"
        />
      </Helmet>
      <div className="contactos-hero">
        <div className="contactos-fixed-header">
          <Header rootClassName="header-root-class-name"></Header>
        </div>
        <h1 className="contactos-text text2XL">Contactos</h1>
        <div className="contactos-bg"></div>
      </div>
      <div className="contactos-post-details">
        <div className="contactos-container1">
          <svg viewBox="0 0 1170.2857142857142 1024" className="contactos-icon">
            <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
          </svg>
        </div>
        <div className="contactos-container2">
          <div className="contactos-container3">
            <h1 className="contactos-text1">A nossa localização</h1>
            <Map></Map>
          </div>
          <ContactForm rootClassName="contact-form-root-class-name"></ContactForm>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Contactos
