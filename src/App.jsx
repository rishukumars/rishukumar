import { useState } from 'react'
import './Appx.css'
import Header from './components/Header'
import MainHead from './components/MainHead'
import TodoItems from './components/TodoItems'
import Welcomemessege from './components/Welcomemessege'

function App() {
  
const Items = [
  {
  name:"Buy Milk",
  date:"21/05/24"
},
{
  name:"Buy Kaddu",
  date:"Buy Now"
}
]

let [CurrentList, setNewList] = useState(Items)

const handleOnClick = (todoName, todoDate) => {
    let newArray = [...CurrentList,{name: todoName,date: todoDate}]
    setNewList(newArray)
}


let onClickedDelete = (name) => {
    let newArray2 = CurrentList.filter((item)  => item.name != name)
    setNewList(newArray2)
}

  return (
    <>
    <Header></Header>
    <MainHead handleOnClick={handleOnClick} ></MainHead>
    {CurrentList.length === 0 && <Welcomemessege></Welcomemessege>}
    <TodoItems items={CurrentList} onClickedDelete={onClickedDelete}></TodoItems>
    </>
  )
}

export default App
