import React, { useContext, useState } from 'react';

export const AppContext = React.createContext({
    username: 'Unknown',
    setUsername: () => {}
});

export const ContextProvider = props => {

    const [username, setUsername] = useState('Unknown');

    const updateUsername = (user) => {
        setUsername(user);
    }


    return (
        <AppContext.Provider value={{username: username,
            setUsername: updateUsername}}>
                {props.children}
        </AppContext.Provider>
    );
}

