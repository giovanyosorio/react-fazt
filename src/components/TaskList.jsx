import TaskCard from "./TaskCard"

function TaskList({tasks,deleteTask}) {


    if(tasks.length===0){
        return <h1>no hay tareas aun</h1>
    }
    return (
      <main className="board">
            {
                tasks.map((task)=>(
                <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
                ))
            }
      </main>
    )
  }
  
  export default TaskList