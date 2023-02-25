import React, { useState } from 'react';
import Icon from '../components/Icon';

import './common.pages.css'

const SignInPage = () => {

    const [email, setEmail] = useState(JSON.parse(localStorage.getItem("curUserID")));
    const [password, setPassword] = useState(JSON.parse(localStorage.getItem(`Password${email}`)));
    const [rememberme, setRememberMe] = useState(false);

    const onClicSignInButton = () => {
        if (rememberme) {
            localStorage.setItem("curUserID", JSON.stringify(email));
            localStorage.setItem(`Password${email}`, JSON.stringify(password));
            localStorage.setItem(`RememberMe${email}`, JSON.stringify(rememberme));
        }
    }

    return (
        <section
            style={{
                width: "320px",
            }}
        >
            {<div>
                <Icon />
            </div>}
            <div>SIGN IN</div>
            <div>
                <input
                    type="text"
                    placeholder="Email Address "
                    defaultValue={JSON.parse(localStorage.getItem("curUserID"))}
                    onChange={(event) => {
                        setEmail(event.target.value);
                        localStorage.setItem("curUserID", JSON.stringify(event.target.value));
                        // console.log(curEmail);
                        // const curPassword = JSON.parse(localStorage.getItem(`Password${curEmail}`));
                        // console.log(curPassword);
                        // const inp = document.getElementById('inputpassword');
                        // if (curPassword) {
                        //     setPassword(curPassword);
                        //     if (inp){
                        //         inp.value = password;    
                        // }} else {inp.value = ""};
                    }}
                >
                </input>
            </div>
            <div>
                <input
                    id='inputpassword'
                    type="password"
                    placeholder='Password '
                    defaultValue={JSON.parse(localStorage.getItem(`Password${email}`))}
                    onChange={(event) => {
                        setPassword(event.target.value);
                        localStorage.setItem(`Password${email}`, JSON.stringify(event.target.value));
                    }}
                >
                </input>
            </div>
            <div>
                <label>
                    <input type="checkbox" defaultChecked={rememberme}
                        //                        onChange = {(event) => setRememberMe(event.target.checked)} 
                        onClick={(event) => setRememberMe(event.target.checked)}
                    />
                    Remember me
                </label>
            </div>
            <div style={{ display: "inline-flex" }}>
                <a href="/home" >Forgot password?</a>
                <a href='/signup' > Don't have an account? Sign Up</a>
            </div>
            <div>
                <button
                style={{ height: "35px", width: "150px", margin: " 25px 0 15px" }}
                onClick={onClicSignInButton}
                >
                    SIGN IN
                </button>
            </div>
        </section >
    );
};

export { SignInPage };