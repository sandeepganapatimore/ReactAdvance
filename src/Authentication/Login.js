import React, { useContext } from 'react'
// import AuthContext from '../Context/Normal_login/Parent'
import { authContext } from './AuthContext'

function Login() {
    const auth = useContext(authContext)
    return (
        <>
            <button onClick={auth.login}>Login</button>
        </>
    )
}

export default Login
