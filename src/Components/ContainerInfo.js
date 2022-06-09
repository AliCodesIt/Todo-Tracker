import React from 'react'
import '../Components/Component CSS/ContainerInfo.css';

function ContainerInfo({All, Active, Completed, Action}) {
  return (
    <div className='Container__Info' >
    <div className='Container__Text' >
        <p>All</p>
        <p className='Circle'> {All} </p>
    </div>
    <div className='Container__Text' >
        <p>Active</p>
        <p className='Circle' > {All} </p>
    </div>
    <div className='Container__Text' >
        <p>Completed</p>
        <p className='Circle' > {Completed} </p>
    </div>
</div>
  )
}

export default ContainerInfo