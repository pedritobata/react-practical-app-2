import React, { Fragment, useState, useContext } from 'react';
import './Auth.css';
import GhostCard from '../../components/Cards/GhostCard';
import { authenticate } from '../../constantes/auth-credentials';
import {AppContext} from '../../App';



const Auth = (props) => {

    const context = useContext(AppContext);

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    const loginHandler = event => {
        event.preventDefault();
        if(authenticate(user, password)){
            console.log("Usuario autenticado!!");
            context.setUserName(user);
        }else{
            console.log('Login Failed!');
        }

    }

    const onChangeInputHandler = function (event){
        let value = event.target.value;
        switch(event.target.id){
            case 'txt-email':
                setUser(value); break;
            case 'txt-pass':
                setPassword(value); break;
            default:
                console.log("No se ingresó nada");
        }
    }


    return (
        <Fragment>
            <section className="auth-page">
                <div className="leftScreen halfScreen">
                    <h1 className="h1 display-3 text-light">Delivery Admin</h1>
                    <p className="h4 text-white text-center">El mejor sistema para administrar tu Delivery</p>
                </div>
                <div className="rightScreen halfScreen">
                    <GhostCard width="65" padding="35">
                        <h1 className="great-title">Login Form</h1>
                        <form onSubmit={loginHandler}>
                            <div className="form-group"><label /* htmlFor="txt-email" */ className="form-text">Email</label>
                            <input id="txt-email" type="text" value={user} onChange={onChangeInputHandler} className="form-control"/></div>
                            <div className="form-group"><label /* htmlFor="txt-email" */ className="form-text">Password</label>
                            <input id="txt-pass" type="password" value={password} onChange={onChangeInputHandler} className="form-control"/></div>
                           {/*  <button type="submit" className="btn btn-danger btn-md">Cancel</button> */}
                            <div className="mt-4">
                                <button type="submit" className="btn btn-send-button btn-md btn-block">Send</button>
                            </div>
                        </form>
                    </GhostCard>
                </div>
            </section>
        </Fragment>
    );
}

export default Auth;