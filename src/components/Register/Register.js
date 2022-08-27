import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import '../PopupWithForm/PopupWithForm.css';

const Register = (props) => {
  const { isOpen, onClose, handleSignup, onOutsideClick, onSwitchPopup  } = props;
  return (
    <section className='auth-form'>
      <PopupWithForm
        withNameField
        formName='register'
        popupTitle='Sign up'
        isOpen={isOpen}
        isValid={true}
        buttonText='Sign up'
        redirectText='Sign in'
        onClose={onClose}
        onOutsideClick={onOutsideClick}
        onSwitchPopup={onSwitchPopup}
        onSubmit={handleSignup}
      >
      </PopupWithForm>
    </section>
  );
}

export default Register;
