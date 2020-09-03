import React from 'react';

import Input from 'components/common/Input'

import './style.css';

const Login = ({ setUsername }) => (
  <div className="Login">
    <h1 className="Login__title">Welcome buddy!</h1>
    <Input
      onSubmit={setUsername}
      placeholder="What is your name?"
    />
  </div>
);

export default Login;
