import React from 'react'
import { useState } from 'react'

function Book() {
    const [form,setForm]=useState({
        Title: String,
        Author: String,
        Description: String,
    })

    function handleChange(event){
      const { id, value } = event.target
        console.log(id)
        console.log(value)
        event.persist();
        setForm((form) => ({
            ...form,
            [id]: value,

        }));
        console.log(id)
    }
  return (
  
            <div style={{ margin: '22px' }}>
                <form >
                    <label>Title</label>
                    <input type="text" value={form.Title} id="title" onChange={(e) => setForm(e.target.value)} />
                    <br />
                    <br />
                    <label>Author</label>
                    <input type="text" value={form.Author} id="author" onChange={(e) => setForm(e.target.value)} />
                    <br />
                    <br />
                    <label>Description       </label>
                    <input type="text" value={form.Description} id="Description" onChange={(e) => setForm(e.target.value)}/>
                </form>

                <firstList/>
    </div>
  )
}

const firstList=({Title,Author,Description})=>{

  return (

    <div
        style={{
            width: "600px",
            height: "200px",
            backgroundColor: "red",
        
        }}
    >
    <input type='text' value={Title}/>
    <input type='text' value={Author}/>
    <input type='text' value={Author}/>
   <button>Move</button>

    </div>
)
}

export default Book
