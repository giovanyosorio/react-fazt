
import { createContext, useState ,useEffect} from "react"
import { tasks as data } from "../data/tasks";
export const TaskContext = createContext()

export function TaskContextProvider(props) {


  const [tasks, setTasks] = useState([])
  function createTask(task) {
    const newTask = [...tasks, { title: task.title, id: tasks.length, description: task.description }]
    setTasks(newTask)
  }

  function deleteTask(taskId) {
    const idTask = tasks.filter(task => task.id !== taskId)
    setTasks(idTask)
  }
  useEffect(() => {
    setTasks(data)
  }, [])


  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}
