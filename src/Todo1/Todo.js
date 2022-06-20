import React from 'react'
export default function Todo({ item, remove, id }) {
    // const 
    return (
        <div className='todo'>
            {item}
            <button onClick={() => { remove(id) }} >X</button>
        </div>
    )
}

