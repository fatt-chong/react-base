
import render, {useState, useRef, useEffect} from 'react';
import {TodoList} from './components/TodoList';
import {v4 as uuid} from 'uuid'
function App() {
  
  const [todos, setTodos] = useState([
    {
      id: 1,
      task : "tarea 1",
      completed: false
    }
  ]);

  useEffect(() =>{
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if(storedTodos){
      setTodos(storedTodos);
    }
  }, []);

  useEffect(()=>{
    console.log("cambio algo");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoTaskRef = useRef();

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;
    if(task === "") return;

    setTodos((prevTodos)=>{
      return [...prevTodos, {id: uuid(), task, completed: false}];
    });

    todoTaskRef.current.value = null;
  }

  const toggleTodo = (id) => {
    console.log("padre");
    const newTodos = [...todos];
    const todo = newTodos.find((todo)=> todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleClearAll = () => {
    const newTodos = todos.filter((todo)=>!todo.completed);
    setTodos(newTodos);
  }

  return (
    <>
      <div className="App">
        <h1>wena</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <input type="text" placeholder="nueva tarea" ref={todoTaskRef}/>
        <button type="button" onClick={handleTodoAdd}>+</button>
        <button type="button" onClick={handleClearAll}>-</button>
        <div>
          <h1>te quedan {todos.filter((todo)=> !todo.completed).length} tareas por terminar</h1>
        </div>
      </div>
    </>
  );
}

export default App;
