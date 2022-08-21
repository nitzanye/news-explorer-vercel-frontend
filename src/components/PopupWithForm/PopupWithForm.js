// Responsible for the modal window

import React from "react";
import './PopupWithForm.css';

const PopupWithForm = (props) => {
  const { name, isOpen, popupTitle, children, onSubmit, onClose, onOutsideClick } = props;

  return(
    <div onClick={onOutsideClick} className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} >
      <div className='popup__window' >
        <h2 className='popup__title'>{popupTitle}</h2>
        <form
          className='popup__form'
          name={name}
          onSubmit = {onSubmit}
          noValidate
        >
          {children}
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