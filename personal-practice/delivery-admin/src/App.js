import React from 'react';
import Auth from './pages/Auth/Auth';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import { AppContext} from './Context/context';
import Error404 from './pages/error/404';

class App extends React.Component{

    constructor(props){
        super(props);
    }

    static contextType = AppContext;

    
    render(){

        //No esta autenticado
        let routes = (
            <Switch>
                <Route path='/' exact component={Auth}/>
                <Route path='/error404' exact component={Error404}/>
                <Redirect to='/error404'/>
            </Switch>
        );

        // Autenticado
        
        if(this.context.username !== 'Unknown'){
            routes = (
                <Switch>
                    <Route path='/home' exact component={Home}/>
                    <Route path='/error404' exact component={Error404}/>
                    <Redirect to='/error404'/>

                </Switch>
            );
        }

        return(
                <BrowserRouter>
                   {routes}
               </BrowserRouter>
               
           
        );
    }
}

export default App;