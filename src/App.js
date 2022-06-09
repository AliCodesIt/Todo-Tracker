import React, {useEffect, useState} from 'react';
import './App.css';
import ContainerInfo from './Components/ContainerInfo';
import Light from './Images/Light.png'
import TodoInput from './Components/TodoInput'
import Output from './Components/Output';

function App() {
  const [todo, setTodo] = useState([])
  const [count, setCount] = useState(0)
  const [completecount, setCompletecount] = useState(0)

  const Addtodo = (Todo) => {
    setTodo(() => {
      const newArr = [...todo, {value:Todo,completed:false}]
      return newArr
    })
  }

  const DeleteTodo = (index) => {
      setTodo(() => {
        const newArr = todo.filter((todo, id) => {
          return index != id
        });
        return newArr
      })
      setCount(count - 1)
  }

  const editTodo = (index, currenttext) => {
      setTodo(()=> {
        const newArr = todo.map((todo, id) => {
          if (id === index) {
            return {...todo,value:currenttext}
          }
          return todo
        })
        return newArr
      })
  }

  const completeTodo = (index, completedState) => {
    setTodo(()=> {
      const newArr = todo.map((todo, id) => {
        if (id === index) {
          return {...todo,completed:completedState}
        }
        return todo
      })
      return newArr
    })
}
const completedNumber = () => {
  setCount(count + 1)
}

const completethecount = () => {
  setCompletecount(completecount + 1)
}
const minusthecount = () => {
  setCompletecount(completecount - 1)
}

const all = count
const completedCount = completecount


  return (
    <div className="App">
    <div className='Header' >
      <div className='Header__Top' >
        <div className='Header__Left' >
            <h1 id='Todo' >Todo</h1>
        </div>
        <div className='Header__Right' >
            <img src={Light}/>
        </div>
      </div>
    <div className='Container' >
        <div className='Container__Top' >
           <ContainerInfo All={all} Active={all} Completed={completedCount} />
        </div>
        <TodoInput Todo={Addtodo} Completed={completedNumber} />
        <p className='Todo__Number'> {count} Todo's Found </p>
        {
          todo.map(({value,completed}, index) => {
            return(
              <Output key={index} Todo={value} completed={completed} Delete={() => DeleteTodo(index)} editTodo={editTodo} id={index} completeTodo={completeTodo} />
            )
          })
        }
      </div>
    </div>
    </div>
  );
}

export default App;
