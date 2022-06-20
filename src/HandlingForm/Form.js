import React, { useState } from 'react'
export default function Form() {
    const [name, setName] = useState('')
    const [contact, setContact] = useState()
    const [email, setEmail] = useState('')
    const [list, setList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.length < 3 || contact.length !== 10 || email === "") {
            alert("kuchh gadbad hai")
        }
        else {

            setList([...list, { item1: name, item2: contact, item3: email }])
            setContact('')
            setEmail('')
            setName('')
        }
    }

    const handleContact = (e) => {
        setContact(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const clear = () => {

        setContact('')
        setEmail('')
        setName('')
    }
    return (
        <div className='form' >
            <form onSubmit={handleSubmit}>
                <label >Enter and List out details below</label>
                <br /> <input type='text' placeholder=' Name' value={name} onChange={handleName} />
                <br /> <input type='number' placeholder=' Contact' value={contact} onChange={handleContact} />
                <br /> <input type='email' placeholder=' Email' value={email} onChange={handleEmail} />
                <br /> <button  >Submit</button>
                <button onClick={clear} >Clear</button>
            </form>
            <div className='list-of-data'>
                {list.map((piece, index) => {
                    return (<div key={index}>
                        <p> <label >Name     :</label>{piece.item1}</p>
                        <p> <label>Contact  :</label>{piece.item2}</p>
                        <p> <label>Email    :</label>{piece.item3}</p>
                    </div>)
                })}
            </div>
            <p hidden={name.length < 1}> Name: {name}</p>
            {/* <p >Contact:{contact}</p> */}

        </div>
    )
}