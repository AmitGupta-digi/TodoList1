import React, { useState } from 'react'
import ListOut from './ListOut'
export default function Form() {

    const [arrayList, setArrayList] = useState([])
    const [isValid, setValid] = useState(true)
    const [objectList, setObjectList] = useState({
        name: '',
        age: '',
        fName: '',
        mName: '',
        pin: '',
        country: ''
    })

    const handleChange = (value, name) => {
        const data = { ...objectList }
        data[name] = value
        setObjectList(data)
        // console.log(objectList)


        if (objectList.name.length < 3 ||
            objectList.fName.length < 3 ||
            objectList.mName.length < 3 ||
            objectList.pin.length !== 6 ||
            objectList.country.length < 3) {
            setValid(true)
            // console.log("something wrong", arrayList)
        } else {
            setValid(false)
        }
    }

    const handleSubmit = () => {
        // e.preventDefault()
        // console.log(e)
        arrayList.push(objectList)
        console.log(arrayList)

        
    }
        const arObj = arrayList.map(([key, value]) => {
            return { [key]: value }
            
        })
    // const showData = (objectList)=>{

    //     objectList.forEach((item, index) => {
    //         return (< tr key={index} >
    //         <td colSpan={2}>{item.name}</td>
    //         <td colSpan={3}>{item.age}</td>
    //         <td>{item.fName}</td>
    //         <td>{item.lName}</td>
    //         <td>{item.pin}</td>
    //         <td>{item.country}</td>
    //     </tr >
    //     )

    // })
    // }


    return (
        <div className='form' >
            <div >
                <label >Enter Your details below</label>
                <br /> <input type='text' name='name' placeholder=' Name'
                    value={objectList.name} onChange={(e) => handleChange(e.target.value, 'name')} required />
                <br /> <input type='number' name='age' placeholder=' Age'
                    value={objectList.age} onChange={(e) => handleChange(e.target.value, 'age')} />
                <br /> <input type='text' name='fName' placeholder=' Father Name'
                    value={objectList.fName} onChange={(e) => handleChange(e.target.value, 'fName')} required />
                <br /> <input type='text' name='mName' placeholder=' Mother Name'
                    value={objectList.mName} onChange={(e) => handleChange(e.target.value, 'mName')} required />
                <br /> <input type='number' name='pin' placeholder=' Pin Code'
                    value={objectList.pin} onChange={(e) => handleChange(e.target.value, 'pin')} required />
                <br /> <input type='text' name='country' placeholder=' Country Name'
                    value={objectList.country} onChange={(e) => handleChange(e.target.value, 'country')} required />
                <br /><button hidden={isValid} onClick={handleSubmit}  >Submit</button>
                {/* <button >show</button> */}
            </div>

            {/* {showData} */}

            <div className='list-of-data'>

                < >
                    <li> {objectList.name}</li>
                    <li> {objectList.age}</li>
                    <li>{objectList.fName}</li>
                    <li> {objectList.mName}</li>
                    <li> {objectList.pin}</li>
                    <li> {objectList.country}</li>
                </>
                {arObj }

            </div>

        </div>
    )
}
