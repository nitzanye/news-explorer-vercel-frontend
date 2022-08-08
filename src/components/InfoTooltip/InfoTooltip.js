import React from "react";
import './InfoTooltip.css';
import '../PopupWithForm/PopupWithForm.css';

const InfoTooltip = (props) => {
  const { isOpen, onClose, onOutsideClick, onLoginClick } = props;

  return (
    <div onClick={onOutsideClick} className={`popup popup_type_toolip ${isOpen && 'popup_opened'}`}>
      <div className='popup__window popup__window_type_tooltip' >
        <p className='popup__message'>
          Registration successfully completed!
        </p>
        <button className='popup__link' onClick={onLoginClick}>Sign in</button>
        <button
          className='button_type_close-tooltip'
          type='button'
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;