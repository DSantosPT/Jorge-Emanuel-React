import React from 'react'

import PropTypes from 'prop-types'

import ServiceCard from './service-card'
import './servios.css'

const Servios = (props) => {
  return (
    <div className={`serviços-section3 ${props.rootClassName} `}>
      <div className="serviços-container">
        <h6 className="serviços-text textSM">
          <span className="">ON THE COASTLINE</span>
        </h6>
        <h3 className="serviços-text2 healine">{props.heading}</h3>
        <span className="serviços-text3 textXL">
          <span className="serviços-text4">
            We&apos;re waiting for the weather to warm up so that we can go to
            the coastline. We really miss the summertime, our second home the
            coastline.
          </span>
          <br className=""></br>
        </span>
        <div className="serviços-services">
          <ServiceCard className=""></ServiceCard>
          <div className="serviços-container1">
            <div className="serviços-container2">
              <svg viewBox="0 0 1024 1024" className="serviços-icon">
                <path
                  d="M832 192v-128h-640v128h-192v128c0 106.038 85.958 192 192 192 20.076 0 39.43-3.086 57.62-8.802 46.174 66.008 116.608 113.796 198.38 130.396v198.406h-64c-70.694 0-128 57.306-128 128h512c0-70.694-57.306-128-128-128h-64v-198.406c81.772-16.6 152.206-64.386 198.38-130.396 18.19 5.716 37.544 8.802 57.62 8.802 106.042 0 192-85.962 192-192v-128h-192zM192 436c-63.962 0-116-52.038-116-116v-64h116v64c0 40.186 7.43 78.632 20.954 114.068-6.802 1.246-13.798 1.932-20.954 1.932zM948 320c0 63.962-52.038 116-116 116-7.156 0-14.152-0.686-20.954-1.932 13.524-35.436 20.954-73.882 20.954-114.068v-64h116v64z"
                  className=""
                ></path>
              </svg>
            </div>
            <h1 className="serviços-text5 textXL">{props.heading1}</h1>
            <span className="serviços-text6">{props.text}</span>
          </div>
          <div className="serviços-container3">
            <div className="serviços-container4">
              <svg viewBox="0 0 1024 1024" className="serviços-icon2">
                <path
                  d="M726 726v-172h-86v172h86zM554 726v-428h-84v428h84zM384 726v-300h-86v300h86zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596z"
                  className=""
                ></path>
              </svg>
            </div>
            <h1 className="serviços-text7 textXL">{props.heading2}</h1>
            <span className="serviços-text8">{props.text1}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Servios.defaultProps = {
  heading: 'We are missing the summer',
  heading1: 'Grow your market',
  text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  heading2: 'Launch time',
  text1:
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
  rootClassName: '',
}

Servios.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,
  heading2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Servios
