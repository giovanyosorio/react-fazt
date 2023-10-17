import TaskCard from "./TaskCard"
import {TaskContext} from '../context/TaskContext'
import {useContext} from 'react'

function TaskList() {

  const {tasks}=useContext(TaskContext)
    if(tasks.length===0){
        return <h1>no hay tareas aun</h1>
    }
    return (
      <main className="board">
            {
                tasks.map((task)=>(
                <TaskCard key={task.id} task={task} />
                ))
            }
      </main>
    )
  }
  
  export default TaskList