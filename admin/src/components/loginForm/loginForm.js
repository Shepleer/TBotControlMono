import React from 'react';
import "./loginForm.css"
import PrimaryButton from '../primaryButton/primaryButton';
import TextInput from '../textInput/textInput';

const LoginForm = () => {
    const processLogin = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <form className="Login-Form" onSubmit={processLogin}>
            <TextInput id="login-input" title="Login" name="login" isSecure={false} required={true} />
            <TextInput id="password-input" title="Password" name="password" isSecure={true} required={true} />
            <PrimaryButton title="Login" type="submit" />
        </form>
    );
}

export default LoginForm;