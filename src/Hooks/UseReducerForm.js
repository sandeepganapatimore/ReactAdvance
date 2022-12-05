import React, { useReducer, useContext } from 'react'
import { createContext } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
const initialState = {
    Title: '',
    Author: '',
    Description: '',

    search: '',

    list1: [],
    list2: [],
    remove: [],

}

export const listContext = createContext([
    initialState,
    () => {

    }

])

export const listContext2 = createContext()



// console.log('list data', list1)

export const contextForm = createContext()

function reducer(state, action) {
    // console.log('states', state.list1)

    switch (action.type) {
        case "Title":
            // return { ...state, [action.id]: action.value }
            return { ...state, Title: action.value }
        case "Author":
            return { ...state, Author: action.value }
        case "Description":
            return { ...state, Description: action.value }
        case "list":
            // let value = handleList1(action.payload)
            return { ...state, list1: action.value }
        case "list2":
            return { ...state, list1: action.value.f_list1, list2: action.value.f_list2 }
        // return { ...state, handleList1: action.value }
        case "list3":
            return { ...state, handleList1: action.value }
        case "search":
            return { ...state, search: action.value }
        case "move":
            return { ...state, list2: action.value }
        case "handleList":
            return { ...state, list2: action.value }
        default:
            return state;
    }
}



function UseReducerForm() {
    const [state, dispatch] = useReducer(reducer, initialState)
    // console.log('list1', state.list1)

    // console.log('data of values', values)
    const formSubmit = (e) => {
        e.preventDefault()
        // alert('form submited')   
        const values = {
            L_Title: state.Title,
            L_Author: state.Author,
            L_Description: state.Description,
        }
        const list_data = state.list1
        // console.log('list_data', list_data)
        list_data.push(values)
        console.log(list_data)
        dispatch(
            {
                type: 'list',
                value: [...list_data]
            }
        )
    }

    const handleList1 = (value) => {
        // e.preventDefault() 
        console.log('values', value)
        const item = [...state.list1]
        console.log(item)
        const list2 = [...value]

        const remove = item.filter((item) => {
            if (item !== list2) {
                return true
            }
        })

        const obj = {
            f_list1: item,
            f_list2: list2,
        }
        console.log('values of list2', list2)
        list2.push(value)
        return list2

    }


    const handleList2 = (value) => {
        console.log('values of the list 2', value)
        const list3 = [...value]
        console.log('values of list3', list3)
        {
            dispatch({
                type: 'list3',
                value: [...list3]
            })
        }
        return list3
    }


    return (
        <div className='Reducer'>
            <form className='form' >
                {/* <label>Title</label> */}
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
                <br />
                <br />
                {/* <button onClick={(e) => formSubmit(e)} >Add</button> */}
                <button onClick={formSubmit} >Add</button>

            </form>
            <input type='text' placeholder='Search......' value={state.search}
                onChange={(e) => dispatch({
                    type: 'search',
                    value: e.target.value
                })}
            />
            {/* {
                state.list1.map((item, ind) => {
                    console.log('Items', item)
                    return (
                        <ol key={ind}>
                            <li>Title:{item.L_Title}</li>
                            <li>Author:{item.L_Author}</li>
                            <li>Description:{item.L_Description}</li>
                        </ol>
                    )
                })
            } */}
            {/* <div style={{ display: "flex" }}> */}

            {/* <Form1 list={state.list1} handleList1={(e) => handleList1(e)} search={state.search} />
      <Form2 list2={state.list2} search={state.search} handleList2={(e) => handleList2(e)} /> */}
            {/* </div> */}
            {/* <listContext.Provider value={{ state: state.list1, dispatch: dispatch, search: state.search }}> */}

            <listContext.Provider value={useReducer(reducer, state)}>
                <Form1 />
                <listContext2.Provider value={{ state: state.list2, dispatch: dispatch, handleList2: handleList2, search: state.search }}>
                    <Form2 />
                </listContext2.Provider>
            </listContext.Provider>
        </div>


    )
}

export default UseReducerForm
