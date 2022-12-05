// import React from 'react'
// import { useState, useEffect } from 'react'

// function FetchApi() {
//     const [data, setData] = useState([]);
//     console.log(data)
//     const [ids, setId] = useState(1)

//     const [form, setForm] = useState({
//         name: "",
//         salary: "",
//         age: ""

//     })

//     // const [email, setEmail] = useState('')
//     // const [password, setPassword] = useState('')



//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         if (id === "name") {
//             setForm({
//                 ...form,
//                 name: value
//             })
//         }
//         if (id === "salary") {
//             setForm({
//                 ...form,
//                 salary: value
//             })
//         }
//         if (id === "age") {
//             setForm({
//                 ...form,
//                 age: value
//             })
//         }
//     }


//     useEffect(() => {
//         console.log('email..', email, password)
//         fetch('https://dummy.restapiexample.com/create', {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email: email,
//                 password: password
//             })
//         }).then(response => response.json()).then(res => { setData(res) })
//     }, [email, password])

//     // useEffect(() => {
//     //     // console.log(form)
//     //     fetch('https://3464-45-115-56-145.ngrok.io/user_login', {
//     //         method: "POST",
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify({
//     //             email: email,
//     //             password: password
//     //         })
//     //     })
//     //         .then((response) => response.json(), console.log('responce is..', email))
//     //         .then((data) => setData(data), console.log('data', data))
//     //         .catch((err) => console.log(err))


//     // }, [])


//     return (
//         <div>
//             <h1>Hello</h1>
//             {/* <input type='text'value={<input type='text'value={ids} onChange={e=>setId(e.target.value)}/>} /> */}
//             {/* <input type='text' onChange={e => setId(e.target.value)} />
//             <div>{data}</div> */}
//             <br />
//             <br />
//             <br />
//             <label>Name</label>
//             <input type='text' id="name" value={form.name} onChange={(e) => handleChange(e)} />
//             <br />
//             <label>Salary</label>
//             <input type='password' id="salary" value={form.salary} onChange={(e) => handleChange(e)} />
//             <br /> <label>Age</label>
//             <input type='password' id="age" value={form.age} onChange={(e) => handleChange(e)} />
//             <br />
//             <div>{data}</div>
//             <button></button>
//             {/* <label>age</label>
//             <input type='age' id="age" value={form.age} onChange={handleChange} /> */}

//             {

//             }
//         </div>
//     )
// }

// export default FetchApi
