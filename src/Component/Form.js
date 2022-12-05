import { FastField } from 'formik';
import React from 'react';
import { useState } from 'react';
import { count } from 'rsuite/esm/utils/ReactChildren';
import Card from './Card';





export default function Form() {
    const number = 0
    const [count, setCount] = useState(number)
    console.log(count)
    //   const increasingValue=setCount(count+1)
    //   console.log('increasing the value',increasingValue)
    // States for registration
    // let increasingValue=setCount((prev)=>prev+1)
    // console.log('increasing the value',increasingValue)
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        cellphone: "",
        address1: "",
        address2: "",
        zip: '',
        text: '',
        date: '',
        gender: "Male",
        nation: "India",
        states: "Maharastra",
        cities: 'Sangli',

    }
    )
    // Updating States

    const [data, setData] = useState([])
    console.log('new state', data)

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [entryIndex, setEntryIndex] = useState(-1)
    const [checkbox, setCheckbox] = useState([])
    const [index, setIndex] = useState([])
    const [login, setLogin] = useState(false)


    console.log('Index for checkbox', checkbox)

    const increment = () => setCount((prev) => prev + 1)
    console.log('count', increment)

    console.log('Increasing the value', increment)

    const C_login = () => {
        return (
            <div>
                <p>Good Morning </p>
            </div>
        )
    }

    // const arrdata=index.push(ind)
    // // Handle form data
    // let { firstName,
    //     lastName,
    //     email,
    //     cellphone,
    //     address1,
    //     address2,
    //     zip,
    //     text,
    //     date,
    //     gender,
    //     nation,
    //     states,
    //     cities } = form



    const handleFormData = (event) => {
        const { id, value } = event.target
        console.log(id)
        console.log(value)
        event.persist();
        setForm((form) => ({
            ...form,
            [id]: value,

        }));

        console.log(id)

    };

    // useEffect(() => {
    //     const data = localStorage.getItem('form');
    //     if (data) {
    //         setForm(JSON.parse(data))
    //     }
    // }, [])


    // Handle submit buttons



    const handleSubmit = (e) => {
        e.preventDefault()
        //---- check if data is from table ----//

        const isPresent = data.findIndex((value, index) => form.firstName === value.firstName && form.lastName === value.lastName)

        if (isPresent > -1) {
            alert('DUplicate entry')

        } else {
            if (entryIndex === -1) {
                //---- new data ----//
                setData(prevData => ([...prevData, form]))
                // setData(validate)
                localStorage.setItem('form', JSON.stringify({ ...form }))
            } else {
                console.log('heheheh')
                console.log(form)
                console.log(data)
                let arr = [...data]
                arr[entryIndex] = form
                console.log('the data array', arr)

                setData(arr)


            }
            // setForm({
            //     firstName: "",
            //     lastName: "",
            //     email: "",
            //     cellphone: "",
            //     address1: "",
            //     address2: "",
            //     zip: '',
            //     text: '',
            //     date: '',
            //     gender: "",
            //     nation: "",
            //       states: "",
            //     cities: ''
            // })
        }
    }


    // const handleSubmit=(e)=>{
    //     e.preventDefault();

    //     const isValueTheir=data.findIndex((value,index)=>form.firstName===value.firstName && form.lastName===value.lastName)

    //     if(isValueTheir>-1){
    //         alert('Duplicate value')
    //     }
    //     else
    //     if(entryIndex===-1){
    //         // setData(prev=>([...prev,form]))
    //         setData((prev)=>([...prev,form])
    //         )
    //         localStorage.setItem('form', JSON.stringify({ ...form }))
    //     }

    //     else{
    //       let arr=[...data]
    //       arr[entryIndex]=form
    //       setData(arr)
    //     }
    //     setForm({
    //         firstName: "",
    //         lastName: "",
    //         email: "",
    //         cellphone: "",
    //         address1: "",
    //         address2: "",
    //         zip: '',
    //         text: '',
    //         date: '',
    //         gender: "",
    //         nation: "",
    //         states: "",
    //         cities: ''
    //     })
    // }


    // Deleting through chekcBox.........

    const handleCheckbox = (e) => {
        const ind = e.target.ind
        //   setData(prevState => {
        //     return {
        //       data: prevState.data.map(
        //         li => (li.ind === +ind ? { ...li,
        //           value: !li.value
        //         } : li)
        //       )
        //     };
        //   });

    }

    // Deleting the existing ....

    const handleDelete = (e) => {
        e.preventDefault()
        let totals = [...data]
        console.log(totals)
        console.log(checkbox)
        // console.log(totals.filter((item, ind) => {
        //     if (checkbox.findIndex(ch => ch === ind) == -1) {
        //         return item
        //     }
        //     else {
        //         item.remove()
        //     }
        // }))


        const change = totals.filter((item, ind) => {
            if (checkbox.findIndex(ch => ch === ind) == -1) {
                return item
            }
        })
        console.log('changes in selected ', change)
        setData(change)

        // console.log('Index of deleted value',total)
        // // if (checkbox===false) {
        // //     total = [...checkbox, e.target.value];
        // // } else {
        // //     total.remove(checkbox.indexOf(e.target.value));
        // // }
        // setData(total);


        //     setData(prevState => {
        //       return {
        //         list: prevState.data.filter(li => !li.value)
        //       };
        //     });


        // total.map((check)=>{
        //     check.filter(total===)
        // })


    }

    const handleChange = (check, ind) => {
        console.log('checing value', check)
        console.log('index value', ind)

        setCheckbox(prev => ([...prev, ind]))

    };
    console.log(checkbox)
    const handleEdit = (ind) => {
        console.log(ind)
        const value = data[ind]
        console.log("The retrieved value", value)

        setForm(prev => ({
            ...prev,
            ...value
        }))

        setEntryIndex(ind)
        console.log(setEntryIndex)
        setForm({ ...value })

        //    const update=[...value]
        //  todo[ind]=update;
        //  setUpdate(todo);
        // const todo=[form]
        // update[ind]=todo
        // setUpdate(update)
        // setForm(update)
    }

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };


    return (
        <div className="form">
            <div>
                <h1>Client Details</h1>
            </div>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form id='form'>
                {/* Labels and inputs for form data */}
                <label className="label" >First Name </label>
                <input onChange={(e) => handleFormData(e)} className="input" id='firstName' name='firstName'
                    value={form.firstName} type="text" style={{ marginRight: '34px' }} />
                {console.log(form.firstName)}
                <label className="label">Last Name</label>
                <input onChange={(e) => handleFormData(e)} className="input" id='lastName' name='lastName'
                    value={form.lastName} type="text" />
                {console.log(form.lastName)}
                <label className="label">Email</label>
                <input onChange={(e) => handleFormData(e)} className="input" id='email' name='email'
                    value={form.email} type="email" />
                {console.log(form.email)}

                <br />
                <br />
                <br />

                <label className="label">cellphone</label>
                <input onChange={(e) => handleFormData(e)} className="input" id='cellphone'
                    value={form.cellphone} type="text" />
                {console.log(form.cellphone)}
                <label className="label">Gender</label>
                <select value={form.gender} onChange={(e) => handleFormData(e)} id="gender">
                    {/* <select> */}
                    <option>Male</option>
                    <option>Female </option>
                    <option>TransGender</option>
                    <option>Not to Disclose</option>
                </select>

                <label>DOB</label>
                <input type="date" onChange={(e) => handleFormData(e)} value={form.date} id="date" />

                <br />
                <br />

                <label>Address1</label>
                <input onChange={(e) => handleFormData(e)} className="input" id='address1'
                    value={form.address1} type="text" />



                <label>Address2</label>
                <input onChange={(e) => handleFormData(e)} className="input" id='address2'
                    value={form.address2} type="text" />
                <br />
                <br />
                <br />

                {/* <select value={nation} onChange={(e) => handleFormData(e)}> */}
                <select >
                    <option>India</option>
                </select>


                {/* <select value={states} onChange={(e) => handleFormData(e)}> */}
                <select value={form.states} onChange={(e) => handleFormData(e)} id="states">
                    <option>Maharastra</option>
                    <option>Karnataka</option>
                    <option>Bihar</option>
                    <option>Telangana</option>
                    <option>Kashmir</option>
                </select>

                {/* <select value={cities} onChange={(e) => handleFormData(e)}> */}
                <select value={form.cities} onChange={(e) => handleFormData(e)} id="cities">
                    <option>Sangli</option>
                    <option>Pune</option>
                    <option>Kolahpur</option>
                    <option>Jath</option>
                </select>


                <label>Zip Code</label>
                <input onChange={(e) => handleFormData(e)} className="input"
                    value={form.zip} type="number" id='zip' />
                <br />

                <hr />
                <div>
                    <h5>Thank you for providing the information above</h5>
                </div>
                <div>handleAddress2
                    <p>Breif Explanation for referal</p>
                    <input type='text'
                        value={form.text}
                        onChange={(e) => handleFormData(e)}
                        style={{ width: "30%", height: "70px" }}
                        id="text"
                    />
                </div>

                <br />
                <br />
                <br />


                <button onClick={handleSubmit} className="btn" type="submit" style={{ color: "blue" }}>
                    Submit

                </button>
                <td><button onClick={(e) => handleDelete(e)}>Delete</button></td>


            </form>
            <button onClick={() => setLogin(!login)}>Greetings</button>
            {
                login ? <Card number={count} increment={() => setCount(count + 1)} decrement={() => setCount(count - 1)} /> : null

            }

            <br />
            <br />

            <table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Cell phone</th>
                        <th>Text</th>
                        <th>Date</th>
                        <th>Gender</th>
                        <th>nation</th>
                        <th>states</th>
                        <th>cities</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>

                    {
                        data && data.map((list, ind) => {

                            return (
                                <tr key={ind}>
                                    <td>{list.firstName}</td>
                                    <td>{list.lastName}</td>
                                    <td>{list.email}</td>
                                    <td>{list.cellphone}</td>
                                    <td>{list.text}</td>
                                    <td>{list.date}</td>
                                    <td>{list.gender}</td>
                                    <td>{list.nation}</td>
                                    <td>{list.states}</td>
                                    <td>{list.cities}</td>
                                    <td><button onClick={() => handleEdit(ind)}>Edit</button></td>
                                    <td><input type='checkbox' value={checkbox} onChange={(e) => handleChange(e.target.checked, ind)} /></td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
