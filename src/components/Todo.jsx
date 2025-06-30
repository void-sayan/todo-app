import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {

  // updating the todo
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);


  const inputRef = useRef();  // for manupulating the input tag


  // which runs when add button is clicked
  const add = () => {


    //take a value from the input
    const inputText = inputRef.current.value.trim();
    console.log(inputText);

    if (inputText === "") {
      return null; //if value is empty
    }


    // object that store in useState todolist
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }

    // update the todolist by setTodolist
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";    
  }



  const deleteTodo = (id)=>{
     setTodoList((prvTodos) =>{
          return prvTodos.filter((todo)=> todo.id !== id)
     })
  }


  const toggle = (id)=>{
    setTodoList((prevTodos)=>
      {
          return prevTodos.map((todo)=>
            {
              if (todo.id === id)
             {
                return {...todo, isComplete : !todo.isComplete}
              

              }

              return todo;
          })
     })
  }

  useEffect(() => {

    

    localStorage.setItem("todos",JSON.stringify(todoList));
    
    
  }, [todoList])
  




  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

      {/* -----------title------------ */}

      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt="" srcSet="" />
        <h1 className='text-3xl font-semibold'>Todo - List</h1>
      </div>

      {/* -----------input box------------ */}

      <div className='flex items-center my-7 rounded-full bg-slate-200'>

        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' placeholder='Enter Your Task' type="text" />

        <button onClick={add} className='border-0 rounded-full bg-orange-600 w-32 h-14 text-white cursor-pointer font-medium text-lg'>Add +</button>

      </div>


      {/* -----------Todo list------------ */}

    <div>
      {todoList.map((item,index)=>{
        return <Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo = {deleteTodo} toggle={toggle}/>
      })}

    </div>
    </div>
  )
}

export default Todo
