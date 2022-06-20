import React, { useState } from 'react'
import List from './List'
export default function App3() {
    const [currentItem, setCurrentItem] = useState('')
    const [itemList, updateItemList] = useState([])

    // console.log(currentItem)

    const onChangeHandler = (e) => {
        setCurrentItem(e.target.value)
    }

    const addItemToList = () => {
        updateItemList([...itemList, { item: currentItem, key: Date.now() }])
        // console.log("...itemList: spread operator")
        // console.log(currentItem)
        console.log(itemList)
        setCurrentItem('')
    }

    return (
        <div>
            <div>
                <input type='text' value={currentItem}
                    onChange={onChangeHandler} />
                <button onClick={addItemToList}>+</button>
            </div>
            <List itemList={itemList} updateItemList={updateItemList} />
        </div>
    )
}