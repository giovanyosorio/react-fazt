import TaskList from "../src/components/TaskList"
import TaskForm from "../src/components/TaskForm"

function App() {

  return (
    <main className="board">
      <TaskForm  />
      <TaskList />
    </main>
  )
}

export default App
