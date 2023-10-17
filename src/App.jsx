import TaskList from "../src/components/TaskList"
import TaskForm from "../src/components/TaskForm"
import {tasks as data} from "./tasks";
import {  useState,useEffect} from "react";

function App() {

  const [tasks,setTasks]= useState([])

  useEffect(()=>{
      setTasks(data)
  },[])

  function createTask(task){
    const newTask=[...tasks,{title:task.title,id:tasks.length,description:task.description}]
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
