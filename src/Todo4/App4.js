import React, { useState } from 'react'
export default function App4() {
    const [state, setState] = useState('')
    const [arrayList, setArrayList] = useState([])

    const handleChange = (e) => {
        setState(e.target.value)
    }

    const handleAdd = () => {
        setArrayList([...arrayList, state])
        setState('')
    }

    const remove = (id) => {
        const newData = arrayList.filter((value, index) => {
            return (index !== id)
        })
        setArrayList(newData)
    }
    return (<div><div>
        <input type='text' value={state} onChange={handleChange} />
        <button onClick={handleAdd} >Add</button>
    </div>
        {arrayList.map((item, index) => {
            return (<div ><p>{item}
                <button onClick={() => { remove(index) }}>X</button></p></div>)
        })}
        {state}
    </div>
    )
}