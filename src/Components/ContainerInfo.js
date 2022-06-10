import React from 'react'
import '../Components/Component CSS/ContainerInfo.css';

function ContainerInfo({todo, sortByActive, sortByCompleted, sortByAll}) {
  return (
    <div className='Container__Info' >
    <div className='Container__Text' onClick={sortByAll} >
        <p>All</p>
        <p className='Circle'> {todo.length} </p>
    </div>
    <div className='Container__Text' onClick={sortByActive} >
        <p>Active</p>
        <p className='Circle' > 
          {todo.filter((item) => item.completed === false ).length}
        </p>
    </div>
    <div className='Container__Text' onClick={sortByCompleted} >
        <p>Completed</p>
        <p className='Circle' > 
          {" "}
          {todo.filter((item) => item.completed === true).length}
         </p>
    </div>
</div>
  )
}

export default ContainerInfo 