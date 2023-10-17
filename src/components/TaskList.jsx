
function TaskList({tasks}) {


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