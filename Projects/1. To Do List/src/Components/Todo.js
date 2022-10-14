import React, { useState } from 'react'
import ToDoform from './ToDoForm'
import {RiCloseCircleLine} from 'react-icons/ri' ;
import {AiFillEdit} from 'react-icons/ai' ;
import Todolist from './TodoList';
function Todo( { todos, completeTodo ,removeTodo ,updateTodo} ) {
    const [edit ,setEdit] = useState({
        id: null ,
        value : ''
    });
    const submitUpdate = value =>{
        updateTodo(edit.id,value);
        setEdit({
            id:null ,
            value: ''
        });
    };
    if (edit.id){
        return < ToDoform edit= {edit} onSubmit = {submitUpdate} />
    }
    return  todos.map((todo ,index)=>(
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row' } key= {index}>
            <div key={todo.id} onClick= {()=>completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons' >
                <RiCloseCircleLine onClick={()=> removeTodo(todo.id)} className='delete-icon'  />
                {/* <TiEdit/> */}
                <AiFillEdit onClick={()=>setEdit({id: todo.id , value :todo.text})} className='edit-icon' />
            </div>
        </div>
     ) ) ;
}

export default Todo;