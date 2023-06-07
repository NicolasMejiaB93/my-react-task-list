import Header from "./components/header"
import {TaskList} from "./components/TaskList"

const RecentTasks = [
  { name: "Realizar las actividades de ADA"},
  { name: "Ir al gimnasio"},
  { name: "Arreglar el cuarto"},
  { name: "Lavar el carro"},
  { name: "Cocinar el almuerzo"},
]

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList List={RecentTasks} />
    </div>
  )
}

export default App
