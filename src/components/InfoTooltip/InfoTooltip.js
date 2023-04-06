import React from "react";
import './InfoTooltip.css';
import '../PopupWithForm/PopupWithForm.css';
import Popup from "../Popup/Popup";

const InfoTooltip = (props) => {
  const { name, isOpen, onClose, children, onLoginClick } = props;

  return (
    <Popup
      name={name}
      isOpen={isOpen}
      onClose={onClose}

    >
      {children}
     
      <div className='popup__window popup__window_type_tooltip' >
        <p className='popup__message'>
          Registration successfully completed!
        </p>
        <button className='popup__link' onClick={onLoginClick}>Sign in</button>
      </div>
    </Popup>
    
  );
}

export default InfoTooltip;
