import React, { Fragment } from 'react';
import './Auth.css';
import GhostCard from '../../components/Cards/GhostCard';

const auth = props => {

    return (
        <Fragment>
            <section className="auth-page">
                <div className="leftScreen halfScreen">
                   <h1 className="great-title">Delivery Admin</h1>
                   <p className="slogan">El mejor sistema para administrar tu delivery</p>
                </div>
                <div className="rightScreen halfScreen">
                    <GhostCard>
                        <h1 className="great-title">Login Form</h1>
                    </GhostCard>
                </div>
            </section>
        </Fragment>
    );
}

export default auth;