import React from 'react'

export function TodoItem({todo, toggleTodo}) {
    const {id, task, completed} = todo;
    
    const handleTodoClick = () => {
        console.log("cambio");
        toggleTodo(id);
    }

  return (
    <>
        <li>
            <input type="checkbox" onChange={handleTodoClick} checked={completed}/> {task}
        </li>
    </>
  )
}
