import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import '../PopupWithForm/PopupWithForm.css';

const Register = (props) => {
  const { isOpen, onClose, onSubmit, onOutsideClick, onSwitchPopup  } = props;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setusername] = React.useState('');
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState(true);
  const [isUsernameValid, setIsusernameValid] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChangeEmail = (e) => {
    const { value, validity, validationMessage } = e.target;
    setEmail(value);
    setIsEmailValid(validity.valid);
    !validity.valid && setErrorMessage(validationMessage);
  };

  const handleChangePassword = (e) => {
    const { value, validity, validationMessage } = e.target;
    setPassword(value);
    setIsPasswordValid(validity.valid);
    !validity.valid && setErrorMessage(validationMessage);
  };

  const handleChangeusername = (e) => {
    const { value, validity, validationMessage } = e.target;
    setusername(value);
    setIsusernameValid(validity.valid);
    !validity.valid && setErrorMessage(validationMessage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password, username);
  };


  return (
    <section className='auth-form'>
      <PopupWithForm
        name='register'
        popupTitle='Sign up'
        // linkPath='/signin'
        // linkText='or Sign in'
        isOpen={isOpen}
        onClose={onClose}
        onOutsideClick={onOutsideClick}
        onSwitchPopup={onSwitchPopup}
        onSubmit={handleSubmit}
      >
        <h3 className='form__title'>Email</h3>
        <input
           className={`form__input ${!isEmailValid && 'form__input_type_error'}`}
          type='email'
          id='email'
          name='email'
          placeholder='Enter email'
          value={email}
          onChange={handleChangeEmail}
          required
        />
         <span
          id='email-input-error'
          className={`form__error ${!isEmailValid && 'form__error_type_visible'}`}
        >
          {errorMessage}
        </span>
        <h3 className='form__title'>Password</h3>
        <input
          className={`form__input ${
            !isPasswordValid && 'form__input_type_error'
          }`}
          type='password'
          id='password'
          name='password'
          placeholder='Enter Password'
          value={password}
          onChange={handleChangePassword}
          required
        />
        <span
          id='password-input-error'
          className={`form__error ${!isPasswordValid && 'form__error_type_visible'}`}
        >
          {errorMessage}
        </span>
        <h3 className='form__title'>Username</h3>
        <input
          className={`form__input ${
            !isUsernameValid && 'form__input_type_error'
          }`}
          type='name'
          id='username'
          name='username'
          placeholder='Enter your username'
          value={username}
          onChange={handleChangeusername}
          required
        />
        <span
          id='username-input-error'
          className={`form__error ${!isUsernameValid && 'form__error_type_visible'}`}
        >
          {errorMessage}
        </span>

        <button
        type='submit'
        className={`${isPasswordValid && isEmailValid && isUsernameValid ? 'button_type_submit' : 'button_type_submit button_type_submit-disabled'}`}
        >Sign up</button>
        <p onClick={onSwitchPopup} className='link__text'>or <span className='link__swtich-popup'>Sign in</span></p>
      </PopupWithForm>
    </section>
  );
}

export default Register;