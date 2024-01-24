import { useState } from "react";

export function NewTodoForm({onSubmit}){

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault()

        onSubmit(newItem)

        setNewItem("")
    }
      
    return (
    <form onSubmit={handleSubmit} className = "form">
    <div className = "formRow">
      <label htmlFor="textLaber">Type in your task: </label>
      <input class="search" autoComplete="off" value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
    </div>
    <button className="btn">Add</button>  
  </form>
    )
}