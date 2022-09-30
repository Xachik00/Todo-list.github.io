import { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";


const App = ()=>{

  const [todos, setTodos] = useState([
    {id: 1, title: 'React', done: false , delete : false},
    {id: 2, title: 'Vue', done: false ,delete : false},
    {id: 3, title: 'Angular', done: false , delete : false}
  ]);  

  const addTodo = (text)=>{
    const newTodo = {
      id: Date.now(),
      title: text,
      done: false,
      delete : false
    };
    setTodos( [newTodo, ...todos] );
  }

  const removeTodo = id =>{
    // const newTodos = todos.filter(todo=> todo.id !== id);
    // setTodos(newTodos);
    const newTodos = todos.map(todo=>{
      if(todo.id === id) todo.delete = !todo.delete;
      return todo;
    });
    setTodos(newTodos);
  }

  const doneTodo = id =>{
    const newTodos = todos.map(todo=>{
      if(todo.id === id) todo.done = !todo.done;
      return todo;
    });
    setTodos(newTodos);
  }


  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} doneTodo={doneTodo} />
    </div>
  );
}

export default App;