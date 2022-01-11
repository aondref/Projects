import Header from './components/Header';
import AddTask from './components/AddTask';
import { useState } from 'react/cjs/react.development';

function App() {
  const [tasks, setTasks] = useState([])
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTask = { id, ...task }
    setTasks([ ...tasks, newTask])
  }

  
  return (
    <div className='container'>
      <Header />
      <>
        <AddTask onAdd={addTask} />
      </>
    </div>
  );
}

export default App;