import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import List from './container/List';

import 'bootswatch/dist/lux/bootstrap.min.css';


const App = () => (
    <Fragment>
        <nav className="navbar navbar-dark bg-dark border-bottom border-white">
            <a href="/" className="navbar-brand">
                MOVIE APP
            </a>
        </nav>
        <main className="bg-dark">
            <div className="container">
                <List />
            </div>
        </main>
    </Fragment>
);

ReactDOM.render(<App />, document.getElementById("root"));