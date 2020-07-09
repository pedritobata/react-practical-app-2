import React from 'react';
import { AppContext } from '../../App';


class Home extends React.Component{

    static contextType = AppContext;

    render(){

        return <h1>Welcome {this.context.username}</h1>
    }
}

export default Home;