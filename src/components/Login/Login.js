import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import '../PopupWithForm/PopupWithForm.css';

const Login = (props) => {
  const { isOpen, onClose, onSubmit, onOutsideClick, onSwitchPopup } = props;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState(true);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <section className='auth-form'>
      <PopupWithForm
        name='login'
        popupTitle='Sign In'
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

        <button
        type='submit'
        className={`${isPasswordValid && isEmailValid ? 'button_type_submit' : 'button_type_submit button_type_submit-disabled'}`}
        >Sign in</button>
        <p onClick={onSwitchPopup} className='link__text'>or <span className='link__swtich-popup'>Sign up</span></p>
      </PopupWithForm>
    </section>
  );
}

export default Login;
