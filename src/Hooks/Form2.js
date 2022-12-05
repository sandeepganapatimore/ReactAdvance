import React, { useContext } from 'react'
import { contextForm, listContext2 } from './UseReducerForm'

function Form2(props) {
    // const { list2, search, handleList2 } = props
    const { state, dispatch, handleList2: handleList2, search } = useContext(listContext2)
    console.log('second Form', state)
    return (
        <div className='form2'>
            {
                state.filter((item) => item.L_Title.toLowerCase().includes(search.toLowerCase())).map((item, ind) => {
                    console.log('Items', item)
                    return (
                        <ol key={ind}>
                            <li>Title:{item.L_Title}</li>
                            <li>Author:{item.L_Author}</li>
                            <li>Description:{item.L_Description}</li>
                            <br />
                            <button onClick={() => handleList2(state)}>Move</button>
                        </ol>
                    )
                })
            }

            {/* {
                
                
            } */}
        </div>
    )
}
// .filter((item) => item.L_Title.toLowerCase().includes(search.toLowerCase()))
export default Form2
