import "./styles.css"
import { useState} from "react"

export default function App(){
  const [newItem, setNewItem] = useState("")

  return (
  <>
  <form className = "form">
    <div className = "formRow">
      <label htmlFor="textLaber">Type in your task: </label>
      <input type="text" id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox"/>
          Item1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    <li>
      <label>
        <input type="checkbox"/>
          Item2 
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  )
}
