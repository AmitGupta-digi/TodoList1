import React from 'react'
import  './list.css'
export default function List({ itemList, updateItemList }) {

    const deleteItem = (key) => {
        const newList = itemList.filter((newItem) => {
            return newItem.key !== key
        })
        updateItemList(newList)
    }





return (
    <div className='todo-list'>
        {itemList.map((newItem) => {
            return (
                <div className='todo-input' key={newItem.key}>
                    <p> {newItem.item}</p>
                    <button onClick={() =>
                        deleteItem(newItem.key)}>X
                    </button>
                </div>
            )
        })}
    </div>

)
}