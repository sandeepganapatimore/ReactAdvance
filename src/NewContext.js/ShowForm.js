import React, { useContext } from 'react'
import { formContext } from './ReducerForm'

function ShowForm() {
    const { state, dispatch } = useContext(formContext)
    // console.log('context calue', state)
    return (
        <div>
            <h1>Display first used Context</h1>

            {/* <input type='' value={state.Title} dispatch onChange={(e) => dispatch({
                    type: "Title",
                    value: e.target.value,
                    id: 'Title'

                })} /> */}
            <dd>
                <dl>Title: {state.Title}</dl>
                <dl>Author: {state.Author}</dl>
                <dl>Description: {state.Description}</dl>
            </dd>

        </div>
    )
}

export default ShowForm
