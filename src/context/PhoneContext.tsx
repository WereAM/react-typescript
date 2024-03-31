import React, { createContext, useState } from "react";

export const PhoneContext = createContext({
    model : " ",
    changeModel : () => {},
});

const PhoneContextProvider = ({children}:any) => {
    const [model, setModel] = useState<string>("Z Flip 3");

    const changeModel = () => setModel("Z Flip 5");

    return (
        <PhoneContext.Provider value={{model, changeModel}}>
            {children}
        </PhoneContext.Provider>
    );
};

export default PhoneContextProvider;