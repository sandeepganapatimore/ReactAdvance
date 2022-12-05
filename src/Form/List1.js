import { display } from '@mui/system'
import React, { useCallback } from 'react'
import { useContext } from 'react'
import { useMemo } from 'react'
import { firstList } from './Form'

function List1(props) {
    // var { item, handleList1, search, setList1 } = props
    const { form, handleList1 } = useContext(firstList)
    console.log('values of item', form)




    // const listVal = useContext(firstList)
    // console.log('lisVal', listVal)
    // const iterate = item

    // Below function code is about the call Back function it memorizes functional based values
    // and returns values not JSX 

    // const valList = useCallback(
    //     () => {
    //         const iterate = item.filter((item) => item.Title.toLowerCase().includes(search.toLowerCase()))
    //         return iterate
    //     },
    //     [item, search],
    // )

    // Below code is about the useMemo. it memorizes the value and returns JSX formate value

    // const listVal = useMemo(() => {
    //     const data = item.filter((item) => item.Title.toLowerCase().includes(search.toLowerCase())).map((item, ind) => {
    //         return (
    //             <dd key={ind} >
    //                 <dl>Title</dl>
    //                 <dl>{item?.Title}</dl>
    //                 <dl>Author</dl>
    //                 <dl>{item?.Author}</dl>
    //                 <dl>Description</dl>
    //                 <dl>{item?.Description}</dl>
    //                 <button onClick={() => handleList1(item)}>Move</button>
    //             </dd>
    //         )
    //     })
    //     return data
    // }, [item, search])

    // console.log('', iterate)

    // const listVal = () => {
    //     item && item.map((item, ind) => {
    //         <dd>
    //             <dl>Title:{item?.Title}</dl>
    //             <dl>Author:{item?.Author}</dl>
    //             <dl>Description:{item?.Description}</dl>
    //         </dd>
    //     })
    // }
    return (
        <div style={{
            width: "600px",
            height: "200px",
            backgroundColor: "red",
            display: 'flex'
        }}>
            <h1>hello</h1>

            {/* {listVal} */}
            {/* {valList().map((item, ind) => {
                return (
                    <dd key={ind} >
                        <dl>Title</dl>
                        <dl>{item?.Title}</dl>
                        <dl>Author</dl>
                        <dl>{item?.Author}</dl>
                        <dl>Description</dl>
                        <dl>{item?.Description}</dl>
                        <button onClick={() => handleList1(item)}>Move</button>
                    </dd>
                )
            })} */}
            {form.map((item, ind) => {
                return (
                    <dd key={ind} >
                        <dl>Title :{item?.Title}</dl>
                        <dl>Author :{item?.Author}</dl>
                        <dl>Description : {item?.Description}</dl>
                        <button onClick={() => handleList1(form)}>Move down</button>
                    </dd>
                )
            })}
            {/* {
                item && Object.keys(item).length > 1 && (
                    <dd>
                        <dl>Title</dl>
                        <dl>{item?.Title}</dl>
                        <dl>Author</dl>
                        <dl>{item?.Author}</dl>
                        <dl>Description</dl>
                        <dl>{item?.Description}</dl>
                        <button onClick={() => handleList1(item)}>Move</button>
                    </dd>
                )
            } */}
            {/* {iterateValue} */}
        </div>
    )
}

export default List1
