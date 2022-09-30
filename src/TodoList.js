import TodoItem from "./TodoItem";


const TodoList = ({todos, removeTodo, doneTodo})=>{


  return (
    <div className="TodoList">
     {
      todos.map( (todo, index)=> <TodoItem 
                          key={index}
                          todo={todo} 
                          removeTodo={removeTodo}
                          doneTodo={doneTodo} 
                        />)
     }
    </div>
  );
}

export default TodoList;