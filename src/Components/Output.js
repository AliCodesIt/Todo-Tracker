import React, {useEffect, useState} from 'react'
import '../Components/Component CSS/Output.css'
import Circle from './Images/Circle.png'
import Deletebtn from './Images/Delete.png'
import FilledCircle from './Images/Filledcircle.png'
import GrayPencil from './Images/GrayPencil.png'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';

function Output({Todo, Delete, editTodo, id,completed,completeTodo, Completenumber, Minusnumber}) {

    const [edittext, setEdittext] = useState(false)
    const [currenttext, setCurrenttext] = useState(Todo) 

    useEffect(() => {
        setCurrenttext(Todo)
    }, [Todo])

    const handleEdit = () => {
        setEdittext(true)
    }
    const handleCancel = () => {
        setCurrenttext(Todo)
        setEdittext(false)
    }
    const handleSave = () => {
        editTodo(id, currenttext)
        setEdittext(false)
    } 

    const completedNumber = () => {
        Completenumber()
    }
    const minusCompleted = () => {
        Minusnumber()
    }

  return (
    <div className='Output' >
        {
            edittext ? (
                <div className='Output__Field' >
            <div className='Output__Circle'>
                <img src={Circle} />
                <input type="text" className='Edittext' placeholder='Please type your new todo here...' value={currenttext} onChange={(e) => setCurrenttext(e.target.value)} />
            </div>
            <div className='Output__Buttons'>
                <p>
                    <SaveAltIcon className='Icon' onClick={handleSave} />
                </p>
                <p>
                    <CancelIcon  className='X' onClick={handleCancel} />
                </p>
            </div>
        </div>
            )
            :
       (
        <div className='Output__Field' style={completed? {background:'#2F80ED'}: {}} >
            <div className='Output__Circle' onClick={() => completeTodo(id, completed? false: true) } >
                <img src={completed? FilledCircle: Circle}/>
                <p className='Text' > {Todo} </p>
            </div>
            <div className='Output__Buttons'>
                <p>
                    <EditIcon onClick={handleEdit} style={completed? {color: 'white', fontSize: '20px'}: {fontSize: '18px'}} />
                </p>
                <p>
                    <img src={Deletebtn} onClick={Delete} />
                </p>
            </div>
        </div>)}
    </div> 
  )
}

export default Output 