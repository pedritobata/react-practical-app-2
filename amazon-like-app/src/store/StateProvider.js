import React, { useReducer, createContext ,useContext } from 'react';

const Context = createContext();


const StateProvider = ({reducer, initialState, children}) => {

    return (
        <Context.Provider value={useReducer(reducer, initialState)}>
            {children}
        </Context.Provider>
    );
}

export default StateProvider;

export const useStateValue = () => useContext(Context);