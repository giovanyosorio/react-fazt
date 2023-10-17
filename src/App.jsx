import TaskList from "../src/components/TaskList"
import TaskForm from "../src/components/TaskForm"
import {tasks as data} from "./tasks";
import {  useState,useEffect} from "react";

function App() {

  const [tasks,setTasks]= useState([])

  useEffect(()=>{
      setTasks(data)
  },[])

  function createTask(titleTask){
    const newTask=[...tasks,{title:titleTask,id:tasks.length,description:"nueva tarea"}]
    setTasks(newTask)
  }


  return (
    <main className="board">
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </main>
  )
}

export default App
