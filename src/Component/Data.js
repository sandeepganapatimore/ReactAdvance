import React, { useState } from 'react'
export default function Data() {


    const [text1, setText1] = useState({
        Title:"",
        Author:"",
        Description:""

    });

    
    const [text2, setText2] = useState("");
  
    const moveText = () => {
      setText1(text2);
      setText2(text1);
    };


    const handleSubmit=(e)=>{
        e.preventDefault()
        setText2(prevText => ([...prevText, text1]))
      }
    
      const handleFormData = (event) => {
        const { id } = event.target
        console.log(id)
        event.persist();
        setText1((text1) => ({
          ...text1,
          id,
    
        }));
    
    
      };


    return (
      <div className="App" style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "80%",
            height: "200px",
            // margin: "24px"
          }}
        >
            <form>
        <br/>
        <h2>Author</h2>
        <input type='text' id='title' onChange={(e)=>handleFormData(e)} value={text1.Title}/>
        <br/>
        <br/>
        <label>Description</label>
        <input type='text' id='description' onChange={(e)=>handleFormData(e)} value={text1.Description}/>
        <br/>
        <br/>
        <label>Author</label>
        <input type='text' id='author' onChange={(e)=>handleFormData(e)} value={text1.Author}/>
        <button onClick={handleSubmit} >Add</button>
        
      </form>
        </div>
        <div
          style={{
            width: "80%",
            height: "200px",
            backgroundColor: "blue",
            // margin: "24px"
          }}
        >
          <h3>{text2}</h3>
        </div>
        <button style={{ width: "100px", height: "50px" }} onClick={moveText}>
          Move text
        </button>
      </div>
    );
  }