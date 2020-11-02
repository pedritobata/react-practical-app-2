import React, { useState, useEffect } from "react";
import "./Login.scss";
import { Link, useHistory } from "react-router-dom";
import { userAuth, signUp } from "../../store/redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import MoonLoader  from 'react-spinners/MoonLoader';
import { USER_AUTH_RESET, USER_SIGNUP_RESET } from '../../store/redux/constants/userConstants';

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { loading: loadingSignUp, success: successSignUp, error: errorSignUp } = useSelector(state => state.signUp);

  const { loading: loadingAuth, success: successAuth, error: errorAuth } = useSelector(state => state.userAuth);

  const dispatch = useDispatch();

  const history = useHistory();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(userAuth());
  };

  const signupHandler = () => {
    if (!email || !pass) {
      alert("Email and Password must be provided.");
      return;
    }
    dispatch(signUp(email,pass));
  };


  useEffect(() => {
    if(successSignUp || successAuth){
        history.push("/");
    }
  }, [successSignUp, successAuth]);

  useEffect(() => {
    if(errorSignUp || errorAuth){
       alert("Authentication failed");
    }
    dispatch({type: USER_SIGNUP_RESET})
    dispatch({type: USER_AUTH_RESET})
  }, [errorSignUp, errorAuth]);


  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon"
          className="login__logo"
        />
      </Link>
      {loadingSignUp || loadingAuth ? <MoonLoader  size={100} color={"purple"}  loading={true} /> : (
          <div className="login__container">
          <h1>Sign in</h1>
          <form onSubmit={loginHandler}>
            <h5>E-mail</h5>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              placeholder="At least 6 characters"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button type="submit" className="login__signinButton">
              Sign in
            </button>
          </form>
          <p>
            We know that you care how information about you is used and shared,
            and we appreciate your trust that we will do so carefully and
            sensibly.
          </p>
          <button onClick={signupHandler} className="login__registerButton">
            Create your Amazon Account
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
