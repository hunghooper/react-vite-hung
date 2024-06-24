import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react';


const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching youtube" }
  ])

  const hoidanit = "hung dep trai";
  const age = 23;
  const data = {
    address: "hanoi",
    country: "viet nam"
  }
  const addNewTodo = (name) => {
    alert(`call me ${name}`);
  }


  return (
    <div className="todo-container">
      <div className="todo-title">To do list</div>
      <TodoNew
      />
      <TodoData
        name={hoidanit}
        age={age}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>

  )
}

export default App
