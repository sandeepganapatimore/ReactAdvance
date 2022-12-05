import React, { createContext } from "react";
const states = {
    auth: null,
    login: () => { },
    logout: () => { }

}

export const authContext = createContext(states);


// This is the global state store of the app.