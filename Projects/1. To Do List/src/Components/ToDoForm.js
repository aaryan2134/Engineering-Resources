import React, { useState,useEffect , useRef } from 'react'
function ToDoform(props) {

    const [input , setInput ]= useState("") ;
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    });
    const handleChange = e =>{
        setInput(e.target.value )
    }
    const handleSubmit= e=>{
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*10000 ) ,
            text : input 
        });
        setInput('');
    }
    return ( <div>
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
             type="text" placeholder='Add to to' value={input} name='text' onChange={handleChange} className='todoInput'
             ref={inputRef} />
            <button  className='todo-button'>Add to do</button>
        </form>
    </div>  ); 
}

export default ToDoform;