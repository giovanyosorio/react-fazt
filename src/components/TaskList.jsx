import {tasks as data} from "../tasks";
import { useState ,useEffect} from "react";
console.log(data);
function TaskList() {

    const [tasks,setTasks]= useState([])

    useEffect(()=>{
        setTasks(data)
    },[])
    if(tasks.length===0){
        return <h1>no hay tareas aun</h1>
    }
    return (
      <main className="board">
  
            {
                tasks.map((task)=>(
                    <div key={task.id}>
                        <h1>{task.title}</h1>
                        <p>{task.description}</p>
                    </div>
                ))
            }
      </main>
    )
  }
  
  export default TaskList