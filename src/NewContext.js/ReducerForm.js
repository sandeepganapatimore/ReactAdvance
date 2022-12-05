import React, { useReducer, createContext } from 'react'
import Display2 from './Display2'
import ShowForm from './ShowForm'

export const formContext = createContext()

const Book = {

    Title: "Think and Grow Rich",
    Author: "Napoline Hill",
    Description: "Success"

}

const reduce = (state, action) => {
    switch (action.type) {

        case "Title":
            // return { ...state, [action.id]: action.value }
            return { ...Book, Title: action.value }
        case "Author":
            return { ...Book, Author: action.value }
        case "Description":
            return { ...state, Description: action.value }
        default:
            return state;
    }
}
// console.log('state', Book)
function ReducerForm() {
    const [state, dispatch] = useReducer(reduce, Book)
    return (
        <div>
            <form>
                <label>Title  </label>
                <input name='Title'
                    value={state.Title}
                    type='text'
                    placeholder='Title'
                    onChange={(e) => dispatch({
                        type: "Title",
                        value: e.target.value,
                        id: 'Title'

                    })}
                />
                <br />
                <br />
                <label>Author  </label>
                <input
                    value={state.Author}
                    name='Author'
                    type='text'
                    placeholder='Author'
                    onChange={(e) => dispatch({
                        type: "Author",
                        value: e.target.value,
                        id: 'Author'

                    })} />
                <br />
                <br />
                <label>Description   </label>
                <input
                    value={state.Description}
                    name='Description'
                    type='text'
                    placeholder='Description'
                    onChange={(e) => dispatch({
                        type: "Description",
                        value: e.target.value,
                        id: 'Description'

                    })} />
            </form>
            <formContext.Provider value={{ state: state, dispatch: dispatch }}>

                <ShowForm />
                <Display2 />

            </formContext.Provider>
        </div>



    )
}

export default ReducerForm
