import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react';


const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching youtube" }
  ])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const delteteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id);
    setTodoList(newTodo);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">To do list</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />

      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
          delteteTodo={delteteTodo}
        />
        :
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      }


      {/* {todoList.length > 0 &&
        <TodoData
          todoList={todoList}
        />
      }
      {todoList.length === 0 &&
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      } */}
    </div>

  )
}

export default App
