import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [searchValue, setSearchValue] = useState("");
    const [idVipService, setIdVipService] = useState(0);
    const [idFreeService, setIdFreeService] = useState(0);
    const handleSearchChange = (value) => {
        setSearchValue(value)
        setIdVipService(0)
        setIdFreeService(0)
    };
    const handleIdVipServiceChange = (id) => {
        setIdVipService(id)
        setSearchValue("")
        setIdFreeService(0)
    }
    const handleFreeServiceChange = (id) => {
        setIdFreeService(id)
        setIdVipService(0)
        setSearchValue("")
    }
    return (
        <AppContext.Provider value={{
            searchValue,
            idVipService,
            idFreeService,
            handleFreeServiceChange,
            handleIdVipServiceChange,
            handleSearchChange
        }}>
            {children}
        </AppContext.Provider>
    );
};