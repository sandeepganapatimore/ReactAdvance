import React, { useContext } from 'react'
// import AuthContext from '../Context/Normal_login/Parent'
import { authContext } from './AuthContext'

function Logout() {
    const auth = useContext(authContext)
    return (
        <>
            <button onClick={auth.logout}>Logout</button>
        </>
    )
}

export default Logout
