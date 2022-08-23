// Responsible for the modal window

import React from "react";
import './PopupWithForm.css';
import Popup from '../Popup/Popup';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const PopupWithForm = ({ name, formName, onSubmit, onSwitchPopup, redirectText, buttonText, withNameField, isOpen, onClose, popupTitle, ...props }) => {
  const {inputs, handleChange, errors, isValid } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs);
  };

  return(
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <div className='popup__window' >
        <h2 className='popup__title'>{popupTitle}</h2>
        <form onSubmit={handleSubmit} className='popup__form' name={formName}>
          <h3 className='form__title'>Email</h3>
          <input
            value={inputs.email || ''}
            onChange={handleChange}
            name='email'
            className='form__input'
            type={'email'}
            placeholder={'Enter email'}
            required
          ></input>
          <span className={`form__error ${!isValid && 'form__error_type_visible'}`}>{errors.email}</span>
          <h3 className='form__title'>Password</h3>
          <input
            value={inputs.password || ''}
            onChange={handleChange}
            name='password'
            className='form__input'
            type={'password'}
            placeholder={'Enter password'}
            required
          ></input>
          <span className={`form__error ${!isValid && 'form__error_type_visible'}`}>{errors.password}</span>
          {withNameField && (
            <>
            <h3 className='form__title'>Username</h3>
          <input
            value={inputs.name || ''}
            onChange={handleChange}
            name='name'
            className='form__input'
            type={'string'}
            placeholder={'Enter your username'}
            required
          ></input>
          <span className={`form__error ${!isValid && 'form__error_type_visible'}`}>{errors.name}</span>
            </>
          )}
           <button
        type='submit'
        className={`${isValid ? 'button_type_submit' : 'button_type_submit button_type_submit-disabled'}`}
        >{buttonText}</button>
          <p onClick={onSwitchPopup} className='link__text'>or <span className='link__swtich-popup'>{redirectText}</span></p> 
        </form>
      </div>
    </Popup>
  );
}

export default PopupWithForm;
