import { TodoItem } from "./TodoItem"

export function TodoList({todos,toggelTodo,deleteTodo}){
    return (
    <ul className="list">
    {todos.length === 0 && "You are free today !!!"}   
    {todos.map(todo =>{
    return (

    <TodoItem {...todo} key={todo.id} toggelTodo={toggelTodo} deleteTodo={deleteTodo}/>

    )
   })}

  </ul>
    )
}