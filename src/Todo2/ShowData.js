import React from 'react'
export default function ShowData(
    { item, id, onSelect }) {
    // const[]
    return (<div>
        <h4>{item}
            <button
                onClick={() => {
                    onSelect(id)
                }}>X
                {console.log(id)}
                {/* {console.log(item)} */}
                {/* {console.log(onSelect)} */}
            </button></h4>
    </div>)
}
