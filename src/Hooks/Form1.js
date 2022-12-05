import React, { useContext } from 'react'
import { contextForm, listContext } from './UseReducerForm'
function Form1() {
    // const { list, handleList1, search } = props
    // const { state, dispatch } = useContext(listContext)
    const [state, dispatch] = useContext(listContext)

    console.log('dispatch', dispatch)
    console.log(state)
    // const list1 = useContext(listContext)
    // console.log('states', state)
    var list2 = []
    // console.log('Title form1', list)
    // list2.push(state)
    // console.log('list2', list2)
    return (
        <div className='form1'>
            {
                // state.filter((item) => item.L_Title.toLowerCase().includes(search.toLowerCase())).map((item, ind) => {
                state.list1.map((item, ind) => {
                    return (
                        <ol key={ind}>
                            <li>Title:{item.L_Title}</li>
                            <li>Author:{item.L_Author}</li>
                            <li>Description:{item.L_Description}</li>
                            <br />
                            {/* <button onClick={() => dispatch(
                                {
                                    type: 'move',
                                    value:
                                }
                            )}>Move</button> */}
                            {/* <button onClick={() => handleList1(state)}>Move</button> */}
                            <button onClick={() => dispatch({ type: 'list', payload: item })}>Move</button>
                            {/* <button onClick={() => dispatch({ type: 'handlist1' })}>Move</button> */}
                        </ol>
                    )
                })
            }

            {/* { */}
            {/* state && Object.keys(state).length > 1 && ( */}
            {/* <dd> */}
            {/* <dl>T
            itle</dl> */}
            {/* <dl>{state?.Title}</dl> */}
            {/* <dl>Author</dl> */}
            {/* <dl>{state?.Author}</dl> */}
            {/* <dl>Description</dl> */}
            {/* <dl>{state?.Description}</dl> */}
            {/* <button onClick={() => handleList1(state)}>Move</button> */}
            {/* </dd> */}
            {/* ) */}
            {/* } */}
            {/* <p>heelo</p> */}

        </div>
    )
}
// .filter((item) => item.L_Title.toLowerCase().includes(search.toLowerCase()))
export default Form1
