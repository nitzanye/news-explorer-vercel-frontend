import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import '../PopupWithForm/PopupWithForm.css';

const Login = (props) => {
  const { isOpen, onClose, handleSignin, onOutsideClick, onSwitchPopup  } = props;

  return (
    <section className='auth-form'>
      <PopupWithForm
        formName='login'
        popupTitle='Sign In'
        isOpen={isOpen}
        isValid={true}
        buttonText='Sign in'
        redirectText='Sign up'
        onClose={onClose}
        onOutsideClick={onOutsideClick}
        onSwitchPopup={onSwitchPopup}
        onSubmit={handleSignin}
      >
      </PopupWithForm>
    </section>
  );
}

export default Login;
