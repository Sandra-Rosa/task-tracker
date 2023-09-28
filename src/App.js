import Tasks from './components/Tasks';
import Header from './components/Header';
import {useState} from 'react';;

function App() {
  const [tasks, setTasks] = useState([]);
  const deleteTask =()=>{
    console.log('delete',id);
  }
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
