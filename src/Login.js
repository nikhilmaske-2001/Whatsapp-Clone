import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import whatsapp from "./assets/whatsapp.png";
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src={whatsapp} alt="Whatsapp"/>
                <h1>Welcome to Whatsapp clone</h1>
                <Button onClick={signIn}>
                    Sign in With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
