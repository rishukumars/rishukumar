import { useState } from "react"




function MainHead({handleOnClick}){

  let [todoName, setTodoName] = useState("")
  let [todoDate, setTodoDate] = useState("")

  let handleName = (event) =>{
     setTodoName(event.target.value)
  }

  let handleDate = (event) =>{
    setTodoDate(event.target.value)
  }

  let handleAddClick = () => {
    handleOnClick(todoName,todoDate)
    setTodoName("")
    setTodoDate("")
  }

  return <>
  <input type='text' className='x' placeholder='type you want' value={todoName}  onChange={(event) => handleName(event)} />
  <input type='date' className='x' value={todoDate} onChange={(event) => handleDate(event)} />
  <button className='add' onClick={handleAddClick}>Add</button>
  </>
}


export default MainHead