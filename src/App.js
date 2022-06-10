import React, {useEffect, useState} from 'react';
import './App.css';
import ContainerInfo from './Components/ContainerInfo';
import Light from './Images/Light.png'
import TodoInput from './Components/TodoInput'
import Output from './Components/Output';

function App() {
  const [todo, setTodo] = useState([])
  const [alltodo, setAlltodo] = useState([])

  const Addtodo = (Todo) => {
    const newList = [...alltodo, { value: Todo, completed: false }]
    setTodo(newList)
    setAlltodo(newList)
  }

  const DeleteTodo = (index) => {
      setTodo(() => {
        const newArr = todo.filter((todo, id) => {
          return index != id
        });
        setTodo(newArr)
        setAlltodo(newArr)
      })
  }

  const editTodo = (index, currenttext) => {
      setTodo(()=> {
        const newArr = todo.map((todo, id) => {
          if (id === index) {
            return {...todo,value:currenttext}
          }
          return todo
        })
        setTodo(newArr)
      setAlltodo(newArr)
      })
  }

  const completeTodo = (index, completedState) => {
      const newArr = alltodo.map((todo, id) => {
        if (id === index) {
          return {...todo,completed:completedState}
        }
        return todo
      })
      setTodo(newArr)
      setAlltodo(newArr)
}

const sortByActive = () => {
  const newArr = alltodo.filter((todo, id) => todo.completed === false )
  setTodo(newArr)
}

const sortByCompleted = () => {
  const newArr = alltodo.filter((todo, id) => todo.completed === true )
  setTodo(newArr)
}

const sortByAll = () => {
  setTodo(alltodo)
}


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
           <ContainerInfo todo={alltodo} sortByActive={sortByActive} sortByCompleted={sortByCompleted} sortByAll={sortByAll} />
        </div>
        <TodoInput Todo={Addtodo}/>
        <p className='Todo__Number'> {todo.length} Todo's Found </p>
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
