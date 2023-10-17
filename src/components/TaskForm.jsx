
import { useState } from "react";


function TaskForm({createTask}) {

    const [title,setTitle] =useState("")
    const [description,setDescription] =useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(title,description);
        createTask({
            title,
            description
        })
    }
    
  return (
  
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Escribe tu tarea" 
            
            onChange={(e)=>setTitle(e.target.value)}/>

            <textarea name="" placeholder="Escribe la descripcion de la tarea"id="" cols="30" rows="10"
            onChange={e=>setDescription(e.target.value)}
            
            ></textarea>
                <button >
                    Guardar
                </button>
        </form>

  )
}

export default TaskForm
