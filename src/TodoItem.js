

const TodoItem = ({todo, removeTodo, doneTodo}) => {

  return (
    <div className={todo.done ? 'TodoItem done' : 'TodoItem'} id={todo.delete ? 'delete' : ''}>
      <input type='checkbox' className="checkbox" checked={todo.done} onChange={()=> doneTodo(todo.id)} disabled={todo.delete} />
      <span>{todo.title}</span>
      <span className="delete" onClick={()=>removeTodo(todo.id) }>X</span> 
    </div>
  )
}                                                                                                                                                                               

export default TodoItem

