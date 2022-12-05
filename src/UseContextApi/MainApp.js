import React from 'react'
import { ThemeContext1, Book } from './Book'
import Form from './Form'
function MainApp() {
    return (
        <ThemeContext1.Provider value={Book}>
            <Form />
        </ThemeContext1.Provider>
    )
}

export default MainApp
