import React from 'react';
import Auth from './pages/Auth/Auth';

export const AppContext = React.createContext({
    username: 'Unknown',
    setUsername: () => {}
});

class App extends React.Component{

    render(){

        return(
            <AppContext.Provider value={{username: 'Unknown',
                setUsername: function(username){this.username = username}}}>
                <Auth  />
            </AppContext.Provider>
        );
    }
}

export default App;