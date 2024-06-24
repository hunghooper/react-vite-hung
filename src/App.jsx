import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';


const App = () => {
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
        age={age} />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>

  )
}

export default App
