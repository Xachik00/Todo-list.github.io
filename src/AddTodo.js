import { useState } from "react";

const AddTodo = ({addTodo})=>{

  const [input, setInput] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!input.trim()) return;

    addTodo(input);
    setInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="newtodo"
        placeholder="Add Todo..."
        value={input}
        onChange={(e)=> setInput(e.target.value)}  
      />
      <input type='submit' className="btn" value='ADD' /> 
    </form>
  );
}

export default AddTodo;