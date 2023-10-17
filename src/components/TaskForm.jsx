
import { useState,useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

    const [title,setTitle] =useState("")
    const [description,setDescription] =useState("")

    const {createTask}=useContext(TaskContext)


    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(title,description);
        createTask({
            title,
            description
        })
        setTitle("")
        setDescription("")
    }
    
  return (
  
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Escribe tu tarea" 
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            autoFocus/>

            <textarea name="" placeholder="Escribe la descripcion de la tarea"id="" cols="30" rows="10"
            onChange={e=>setDescription(e.target.value)}
            value={description}
            ></textarea>
                <button >
                    Guardar
                </button>
        </form>

  )
}

export default TaskForm
