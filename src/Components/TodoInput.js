import React, {useState} from 'react'
import Pencil from './Images/Pencil.png'
import Plus from './Images/Plus.png'
import '../Components/Component CSS/TodoInput.css'

function TodoInput({Todo, Completed}) {
  const [todo, setTodo] = useState("")

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const Pushtodo = () => {
    if(todo.trim() === "") {
      alert("Please Enter A Todo!")
      return;
    }
    Todo(todo.trim())
    setTodo("")
    Completed()
  }

  return (
    <div className='Input' >
    <div className='Input__Pen' >
        <img src={Pencil} />
    </div>
    <div className='Input__Field' >
        <input type="text" className='Input__Box' placeholder='Create a new todo...' value={todo} onChange={handleChange} />
    </div>
    <div className='Input__Button' onClick={Pushtodo} >
    <p className='Btn'>
      <img src={Plus} className='Plus'/>
    </p>
    </div>
  </div>
  )
}
 
export default TodoInput