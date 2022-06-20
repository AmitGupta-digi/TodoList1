import React from 'react'
import Todo from './Todo';
import './todo1.css'

function App() {
  const [state, stateFunction] = React.useState('')
  const [arrayList, setArrayList] = React.useState([])
  // console.log("arrayList", arrayList)

  const handleChange = (e) => {
    // console.log(state)
    stateFunction(e.target.value)
  }

  // const maped = ('');
  const addButton = () => {
    if (state.trim().length < 3) {
      alert("Please Enter You todo task")
      // e.preventDefault()
    }
    else
      setArrayList([...arrayList, state])
    stateFunction('')
    // arrayList.map((item) => {
    //   return <li index={item}>{item}</li>
    // })
    console.log(state.toString.length)
    console.log("state:", state)
    console.log("arrayList:", arrayList)
    // setArrayList(state)
  }
  const removeItem = (id) => {
    const newData = arrayList.filter((valueI, index) => {
      return (index !== id)
    })
    setArrayList(newData)
  }


  const handleForm = (e) => {
    e.preventDefault()
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleForm} >
          <h2 style={{ textAlign: 'center' }}>Simple Todo List</h2>
          <div className='input'>
            <input placeholder='Add your task here' style={{ width: 300 }}
              type='text' value={state} onChange={handleChange} />
            <button onClick={addButton} >Add</button>
          </div>
        </form>
        {/* <Todo arrayList={arrayList} /> */}
        {/* <div> {addButton}</div> */}
        {arrayList.map((item, index) => {
          return <Todo
            key={index} id={index} item={item} remove={removeItem} />
        })}
      </header>
    </div>
  );

}

export default App;
