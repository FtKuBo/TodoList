import "./styles.css"
import { useState} from "react"

export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    setTodos(currentTodos =>{
      return [ ...currentTodos,{id:crypto.randomUUID(), title:newItem,completed:false},]
    })
    
    setNewItem("");
  }

  return (
  <>
  <form onSubmit={handleSubmit} className = "form">
    <div className = "formRow">
      <label htmlFor="textLaber">Type in your task: </label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
    </div>
    <button className="btn">Add</button>  
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
   {todos.map(todo =>{
    return (
    <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed}/>
        {todo.title}
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    )
   })}
  </ul>
  </>
  )
}
