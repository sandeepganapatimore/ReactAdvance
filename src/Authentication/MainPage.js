import React, { useState } from 'react'
import { authContext } from './AuthContext'
import Login from './Login'
import Logout from './Logout'

function MainPage() {
    const [auth, setAuth] = useState(false)
    const login = () => {
        setAuth(true)
    }
    const logout = () => {
        setAuth(false)
    }
    return (
        <>
            <authContext.Provider value={{ auth: auth, login: login, logout: logout }}>
                <p>{auth ? 'Hi! You are Logged In' : 'Oope! Kindly Login'}</p>
                <Login />
                <Logout />
            </authContext.Provider>
        </>
    )
}

export default MainPage
