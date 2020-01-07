import React from 'react';
import './LoginForm.scss';

const LoginForm = () => (
  <form className="form">
    <input className="form__id" type="text" />
    <input className="form__password" type="password" />
  </form>
);

export default LoginForm;
