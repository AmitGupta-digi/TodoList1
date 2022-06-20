import React, { useState } from 'react'
import ShowData from './ShowData';
export default function Todo() {
    const [task, setTask] = useState('')
    const [data, setData] = useState([])
    // console.log("data at ueState: ",task,data)

    const handleOnChange = (e) => (
        setTask(e.target.value))

    const submitHandler = (e) => {
        e.preventDefault()
        setData([...data, task])
        setTask('')
    }
    const removeItem = (a) => {
        const finalData = data.filter((value,index) => {
            return (index != a);
        }
        )
        setData(finalData)
        // console.log("finalData: ",finalData)
        // console.log("passed index to remove from child component: ",a)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <input type='text' value={task}
                        onChange={handleOnChange} />
                    <button type='submit'>Add</button>
                    <h1>{task}</h1>
                </div>
            </form>
            {data.map((item, index) => {
                return <ShowData
                    item={item}
                    id={index}
                    key={index}
                    onSelect={removeItem}
                />
            })}
        </div>
    )
}