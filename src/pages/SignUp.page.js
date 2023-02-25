import React, { useState } from 'react';
import Icon from '../components/Icon';

import './common.pages.css'

const SignUpPage = () => {

    const curEmail = localStorage.getItem("curUserID");
    const [email, setEmail] = useState(curEmail);
    const [password, setPassword] = useState(JSON.parse(localStorage.getItem(`Password${email}`)));
    const [FirstName, setFirstName] = useState(JSON.parse(localStorage.getItem(`FirstName${email}`)));
    const [LastName, setLastName] = useState(JSON.parse(localStorage.getItem(`LastName${email}`)));
    const [AdAccept, setAdAccept] = useState(false);

    const onClickSignUpButton = () => {
        localStorage.setItem("curUserID", JSON.stringify(email));
        localStorage.setItem(`Password${email}`, JSON.stringify(password));
        localStorage.setItem(`FirstName${email}`, JSON.stringify(FirstName));
        localStorage.setItem(`LastName${email}`, JSON.stringify(LastName));
        localStorage.setItem(`AdAccept${email}`, JSON.stringify(AdAccept));
    }

    return (
        <section 
        style={{
            width: "400px",
        }}
        >
            {<div>
                <Icon />
            </div>}
            <div>SIGN UP</div>
            <div style={{ display: "inline-block" }}>
                <input
                    type="text"
                    placeholder="First Name"
                    defaultValue={JSON.parse(localStorage.getItem(`FirstName${email}`))}
                    onChange={(event) => {
                        setFirstName(event.target.value)
                        localStorage.setItem(`FirstName${email}`, JSON.stringify(event.target.value));
                    }
                    }
                >
                </input>
                <input
                    type="text"
                    placeholder='Last Name'
                    defaultValue={JSON.parse(localStorage.getItem(`LastName${email}`))}
                    onChange={(event) => {
                        setLastName(event.target.value);
                        localStorage.setItem(`LastName${email}`, JSON.stringify(event.target.value));
                    }
                    }
                >
                </input>
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Email Address "
                    title="Email Address "
                    defaultValue={JSON.parse(localStorage.getItem("curUserID"))}
                    onChange={(event) => {
                        setEmail(event.target.value);
                        localStorage.setItem("curUserID", JSON.stringify(event.target.value));
                    }
                    }>
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
                    <input type="checkbox" defaultChecked={false}
                        onChange={(event) => setAdAccept(event.target.checked)}
                    />
                    I want to receive inspiration, marketing promotions and updates via email.
                </label>
            </div>
            <div>
                <a href='/signin' > Already have an account? Sign In</a>
            </div>
            <div>
                <button
                style={{ height: "35px", width: "170px", margin: " 25px 0 15px" }}
            onClick={onClickSignUpButton}>SIGN UP</button>
            </div>
        </section >
    );
};

export { SignUpPage };