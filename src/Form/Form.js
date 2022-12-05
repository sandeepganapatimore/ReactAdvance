import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'
import List1 from './List1'
import List2 from './List2'
import useFetchData from './useFetchData'


export const firstList = createContext()
export const firstList2 = createContext()

export default function Form() {
  const [form, setForm] = useState({
    Title: "",
    Author: "",
    Description: ""
  })
  console.log('form data', form)

  const [search, setSearch] = useState('')

  const [list1, setlist1] = useState([])
  console.log('list1', list1)


  const [send, setList2] = useState([])
  console.log('send', send)




  const handleList1 = (value) => {
    console.log('values ', value)
    //  e.preventDefault(e)
    console.log('item2', list1)
    // setList2(list1)
    // a.push(...form,list1)
    // setList2(a)
    // setList2([...send, ...list1])

    const remove = list1.filter((item, index) => {
      if (item !== value) {
        return item
      }
    })

    // const remove = (e) => {
    //   setlist1(list1.filter(items=>items.Title!==x))
    // }


    console.log('remove', remove)
    // const remove =(index)=>{
    //   var Key=list1
    //   Key.splice(index,1)
    // }
    setList2([...send, value])
    const b = send
    b.push(value)
    console.log(b)
    console.log('b', JSON.stringify(b))
    const c = localStorage.setItem('send', JSON.stringify(b))
    localStorage.setItem('submit', JSON.stringify(remove))
    setlist1([...remove])

  }

  const handleList2 = (value) => {
    console.log('handleList2......', value)

    const remove = list1.filter((item, index) => {
      if (item !== value) {
        return item
      }
    })

    setlist1([...list1, value])
    const c = list1
    c.push(value)
    console.log('b', JSON.stringify(c))
    const d = localStorage.setItem('submit', JSON.stringify(c))
    localStorage.setItem('send', JSON.stringify(remove))
    setList2([...remove])
    return { list1, send }

  }



  // console.log('searching the value', list1.filter((item) => item.Title.toLowerCase().includes(search)));

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'title') {
      setForm({
        ...form,
        Title: value
      })
    }
    if (id === 'author') {
      setForm({
        ...form,
        Author: value
      })
    }
    if (id === 'description') {
      setForm({
        ...form,
        Description: value
      })
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setlist1(prevForm => ([...prevForm, form]))
    // values.push(isAppend)
    const a = [...list1]
    a.push(form)
    const b = localStorage.setItem('submit', JSON.stringify(a))
  }

  // const [displayList, setDisplay] = useFetchData()
  // console.log(displayList)

  // useEffect(() => {
  //   setlist1(displayList)
  //   // setList2(JSON.parse(displayList))
  // }, [displayList])


  // useEffect(() => {
  //   const displayList = localStorage.getItem('submit')
  //   console.log('displpaydata', JSON.parse(displayList))

  //   const displayList2 = localStorage.getItem('send')
  //   console.log('displpaydata 2', JSON.parse(displayList2))

  //   if (displayList) {
  //     setlist1(JSON.parse(displayList))
  //   }

  //   if (displayList2) {
  //     setList2(JSON.parse(displayList2))
  //   }
  // }, [])

  // setlist1(prevForm => ([...prevForm, displayList]))
  // if(displayList){
  //   setlist1([...displayList])
  // }
  // console.log('new note call:', notes)

  // useEffect(()=>{
  //   const displayList2 = localStorage.getItem('send')
  //   console.log('displpaydata 2', JSON.parse(displayList2))

  //   if(displayList2){
  //     setList2(JSON.parse(displayList2))
  //   }
  // },[])

  // useCallback(
  //   () => {

  //   },
  //   [second],
  // )


  return (
    <div>
      <form>
        <label>Title</label>
        <input type='text' value={form.Title} id='title' onChange={handleChange} />
        <br />
        <label>Author</label>
        <input type='text' value={form.Author} id='author' onChange={handleChange} />
        <br />
        <label>Description</label>
        <input type='text' value={form.Description} id='description' onChange={handleChange} />
      </form>
      <button onClick={onSubmit}>Add</button>
      {/* <button onClick={Display}>Display</button> */}
      <br />
      <input type='text' placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)} />
      <br />
      <br />

      <firstList.Provider value={{ form: list1, handleList1: handleList1, form1: send, handleList2: handleList2 }}>
        {/* <List1 item={list1} handleList1={(value) => handleList1(value)} search={search} setlist1={setlist1} /> */}
        <List1 />
        <firstList2.Provider value={{ form: send, handleList2: handleList2 }} >
          <List2 />
        </firstList2.Provider>
      </firstList.Provider>


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div style={{
        width: "600px",
        height: "200px",
        backgroundColor: "green",
      }}>
        {
          // send && Object.keys(send).length > 1 && <List2 item={send} />
          <List2 item={send} search={search} setList2={setList2} handleList2={handleList2} />
        }
      </div>
    </div>
  )
}
