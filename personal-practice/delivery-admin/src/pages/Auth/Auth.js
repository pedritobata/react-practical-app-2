import React, { Fragment } from 'react';
import './Auth.css';
import GhostCard from '../../components/Cards/GhostCard';


const auth = props => {

    return (
        <Fragment>
            <section className="auth-page">
                <div className="leftScreen halfScreen">
                   <h1 className="h1 display-3 text-light">Delivery Admin</h1>
                   <p className="h2 text-muted">El mejor sistema para administrar tu delivery</p>
                </div>
                <div className="rightScreen halfScreen">
                    <GhostCard>
                        <h1 className="great-title">Login Form</h1>
                        <button className="btn btn-send-button btn-lg">Cancel</button>
                        <button className="btn btn-light btn-lg">Save</button>
                    </GhostCard>
                </div>
            </section>
        </Fragment>
    );
}

export default auth;