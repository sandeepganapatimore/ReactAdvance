import React, { useReducer } from "react";
const initialState = {
    fname: '',
    lname: '',
    ttl: '',
    id: '',
    arr: []
}
const inputFieldReducer = (state, action) => {
    //  console.log(action)
    //action = {type:, payload:}
    switch (action.type) {
        case 'f_name':
            return { ...state, fname: action.value }
        case 'l-name':
            return { ...state, lname: action.value }
        case 'ttle':
            return { ...state, ttl: action.value }
        case 'ID':
            return { ...state, id: action.value }
        case 'Arr':
            return { ...state, arr: action.value }
        default:
            return state
    }
}
function Frame() {
    const [input, dispatch] = useReducer(inputFieldReducer, initialState)
    //    console.log(input);
    console.log(input.arr)
    const addClickHandler = (e) => {
        let myobj = {
            first_name: input.fname,
            last_name: input.lname,
            Title: input.ttl,
            Id: input.id
        }
        const arr2 = [...input.arr]
        arr2.push(myobj)
        dispatch({ type: 'Arr', value: [...arr2] })
    }

    return (
        <>
            <div>
                <label>First Name:</label>
                <input onChange={(e) => dispatch({ type: 'f_name', value: e.target.value })} value={input.fname} ></input><br></br> <br></br>
                <label>Last Name:</label>
                <input onChange={(e) => dispatch({ type: 'l-name', value: e.target.value })} value={input.lname} ></input><br></br> <br></br>
                <label>Title:</label>
                <input onChange={(e) => dispatch({ type: 'ttle', value: e.target.value })} value={input.ttl} ></input><br></br> <br></br>
                <label>ID:</label>
                <input onChange={(e) => dispatch({ type: 'ID', value: e.target.value })} value={input.id}></input ><br></br><br></br>
                <button onClick={() => addClickHandler()} value={input.arr} >add</button>
            </div>
            {input.arr.map((element, index) => {
                console.log(element)
                return (
                    <div>
                        <p> First Name:{element.first_name}</p>
                        <p>Last Name: {element.last_name}</p>
                        <p>Title:{element.Title}</p>
                        <p>Id:{element.Id}</p>
                    </div>
                )
            })}
        </>
    )
}
export default Frame;







