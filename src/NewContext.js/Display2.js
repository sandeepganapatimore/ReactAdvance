import React, { useContext } from 'react'
import { formContext } from './ReducerForm'

function Display2() {
    const { state, dispatch } = useContext(formContext)
    // console.log('context calue', state)
    return (
        <div>
            <h1>Display the second used context</h1>
            <dd>
                <dl>Title: {state.Title}</dl>
                <dl>Author: {state.Author}</dl>
                <dl>Description: {state.Description}</dl>
            </dd>
        </div>
    )
}

export default Display2
