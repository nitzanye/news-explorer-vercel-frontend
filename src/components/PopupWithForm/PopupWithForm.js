// Responsible for the modal window

import React, { Children } from "react";
import { Link } from "react-router-dom";
import './PopupWithForm.css';

const PopupWithForm = (props) => {
  const { name, isOpen, popupTitle, children, onClose } = props;

  // name - signin / signup

  return(
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} >
      <div className='popup__window'>
        <h2 className='popup__title'>{popupTitle}</h2>
        <form
          className='popup__form'
          name={name}
          // onSubmit = {onSubmit}
          noValidate
        >
          {children}
          {/* <Link to={linkPath} className='form__link'>
          {linkText}
          </Link> */}
        </form>
        <button
          className='popup__close-button'
          type='button'
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;