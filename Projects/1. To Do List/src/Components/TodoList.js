import React, { useState } from 'react';
import Todo from './Todo';
import ToDoform from './ToDoForm';

function Todolist() {
    const [todos , setTodos ]= useState([]) ;
    const addTodo = todo =>{
        if (!todo.text|| /^\s*$/.test(todo.text)) {
            return ;
        }
        const newTodos =[todo ,...todos ] ;
        setTodos(newTodos);
        console.log(...todos)
        setTodos(newTodos);
    };
    const removeTodo = id=>{
        const removeArr = [...todos].filter(todo=> todo.id!= id) ;
        setTodos(removeArr); 
    }
    const updateTodo = ( todoId , newValue )=>{
        if (!newValue.text|| /^\s*$/.test(newValue.text)) {
            return ;
        }
        setTodos( prev => prev.map(item => ( item.id=== todoId ?newValue : item)));
    }
    const completeTodo = id=> {
        let updatedTodos = todos.map( todo =>{
            if( todo.isComplete===id )
            {
                todo.isComplete= !todo.isComplete ;
            }
            return todo ;
        })
        setTodos(updatedTodos);
    };
    return (  
        <div>
            <h1 id = 'to-do-heading'>
                To Do List <br />
                 Whats the plan for today ? </h1>
            <ToDoform onSubmit= {addTodo}/>
            < Todo todos= {todos} completeTodo = { completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    );
}

export default Todolist ;