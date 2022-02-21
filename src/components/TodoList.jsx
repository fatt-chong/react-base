import React, {useState} from 'react'
import {TodoItem} from "./TodoItem";

export function TodoList({todos, toggleTodo}) {

  return (
    <>
        <ul>
            {todos.map((todo)=>(
                <TodoItem todo = {todo} key={todo.id} toggleTodo={toggleTodo}/>
            ))}
        </ul>
    </>
  )
}
