import React, { useReducer, createContext , useContext} from 'react';


const DataLayerContext = createContext();


const DataLayer = ({initialState, reducer, children}) => {

    return (
        <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </DataLayerContext.Provider>
    );
}

export default DataLayer;

export const useDataLayerContext = () => useContext(DataLayerContext);