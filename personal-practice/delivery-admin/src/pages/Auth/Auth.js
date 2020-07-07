import React, { Fragment } from 'react';
import './Auth.css';
import GhostCard from '../../components/Cards/GhostCard';


const auth = props => {

    return (
        <Fragment>
            <section className="auth-page">
                <div className="leftScreen halfScreen">
                    <h1 className="h1 display-3 text-light">Delivery Admin</h1>
                    <p className="h4 text-white text-center">El mejor sistema para administrar tu delivery</p>
                </div>
                <div className="rightScreen halfScreen">
                    <GhostCard width="65" padding="35">
                        <h1 className="great-title">Login Form</h1>
                        <form>
                            <div className="form-group"><label /* htmlFor="txt-email" */ className="form-text">Email</label>
                            <input id="txt-email" type="text" className="form-control"/></div>
                            <div className="form-group"><label /* htmlFor="txt-email" */ className="form-text">Password</label>
                            <input id="txt-pass" type="password" className="form-control"/></div>
                           {/*  <button type="submit" className="btn btn-danger btn-md">Cancel</button> */}
                            <div className="mt-4">
                                <button type="submit" className="btn btn-primary btn-md btn-block">Send</button>
                            </div>
                        </form>
                    </GhostCard>
                </div>
            </section>
        </Fragment>
    );
}

export default auth;