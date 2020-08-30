import React, { useState } from 'react';
import './Login.scss';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

const Login = () => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const history = useHistory();

    const loginHandler = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, pass)
            .then(auth => {
                console.log(auth);
                history.push("/");
            })
            .catch(err => alert(err.message));
    }

    const signupHandler = () => {
        if(!email || !pass) {
            alert("Email and Password must be provided.");
            return;
        }
        auth.createUserWithEmailAndPassword(email,pass)
            .then(auth => {
                console.log(auth);
                history.push("/");
            })
            .catch(err => alert(err.message));
    }

    return (
        <div className="login">
            <Link 
                to="/"
            >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="amazon"
                    className="login__logo"
                 />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form onSubmit={loginHandler}>
                    <h5>E-mail</h5>
                    <input type="email"  
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" 
                        placeholder="At least 6 characters"
                        value={pass} 
                        onChange={e => setPass(e.target.value)}
                        />
                    <button type="submit" 
                        className="login__signinButton">Sign in</button>
                </form>
                <p>
                We know that you care how information about you is used and shared, and we appreciate your trust that we will do so carefully and sensibly.
                </p>
                <button 
                    onClick={signupHandler}
                    className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;