import React from 'react'

import PropTypes from 'prop-types'

import Label from './label'
import './contact-form.css'

const ContactForm = (props) => {
  return (
    <div className={`contact-form-contact ${props.rootClassName} `}>
      <Label
        text="MESSAGE US"
        rootClassName="label-root-class-name"
        className=""
      ></Label>
      <h2 className="contact-form-text">{props.heading}</h2>
      <span className="contact-form-text01 textXL">{props.text}</span>
      <div className="contact-form-form"></div>
      <form
        id="contact-form"
        action="https://getform.io/f/39903668-4bc1-4ccc-ac64-5447b0b57438"
        method="POST"
        className="contact-form-form1"
      >
        <h1 className="contact-form-text02">{props.heading1}</h1>
        <span className="contact-form-text03 textXL">{props.text1}</span>
        <span className="contact-form-text04 textXS">{props.text2}</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="contact-form-textinput textSM input"
        />
        <span className="contact-form-text05 textXS">{props.text31}</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder1}
          className="contact-form-textinput1 textSM input"
        />
        <span className="contact-form-text06 textXS">{props.text4}</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder4}
          className="contact-form-textinput2 input textSM"
        />
        <span className="contact-form-text07 textXS">{props.text5}</span>
        <textarea
          cols="80"
          rows="4"
          disabled="true"
          placeholder={props.textarea_placeholder}
          className="contact-form-textarea textSM textarea"
        ></textarea>
        <button type="submit" className="contact-form-button button textXS">
          <span className="">
            <span className="">Enviar</span>
          </span>
        </button>
      </form>
    </div>
  )
}

ContactForm.defaultProps = {
  text31: 'CONTACTO',
  text5: 'MENSAGEM',
  text3: 'CONTACTO',
  textinput_placeholder11: 'Introduza o seu contacto (email / telemóvel)',
  submitForm: () => {},
  heading1: 'Deixe-nos a sua mensagem',
  textarea_placeholder: 'Introduza a sua mensagem',
  text2: 'NOME',
  textinput_placeholder: 'Introduza o seu nome',
  text6: 'Enviar',
  textinput_placeholder4: 'Introduza o assunto',
  rootClassName: '',
  text: "They say there's no future for the street rascals, nothing for them, leave them to fall. But it isn't always how you would like it to be, especially when you do nothing for yourself.",
  heading: 'Type in the bellow form',
  button: 'Button',
  text1: 'Por favor, preencha o formulário abaixo',
  textinput_placeholder1: 'Introduza o seu contacto (email / telemóvel)',
  text4: 'ASSUNTO',
}

ContactForm.propTypes = {
  text31: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  textinput_placeholder11: PropTypes.string,
  submitForm: PropTypes.func,
  heading1: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  text2: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text6: PropTypes.string,
  textinput_placeholder4: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.string,
  text1: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text4: PropTypes.string,
}

export default ContactForm
