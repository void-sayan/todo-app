import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {

  // updating the todo
  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);


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



  const deleteTodo = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id)
    })
  }


  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete }


        }

        return todo;
      })
    })
  }

  useEffect(() => {



    localStorage.setItem("todos", JSON.stringify(todoList));


  }, [todoList])





  return (
    <div className='bg-white place-self-center w-full max-w-md sm:max-w-lg md:max-w-xl flex flex-col p-4 sm:p-7 min-h-[60vh] rounded-xl shadow-md'>

      {/* -----------title------------ */}

      <div className='flex items-center mt-4 gap-2'>
        {/* <img className='w-7 sm:w-8' src={todo_icon} alt="" srcSet="" /> */}
        <lord-icon
          src="https://cdn.lordicon.com/mubdgyyw.json"
          trigger="hover"
        >
        </lord-icon>
        <h1 className='text-2xl sm:text-3xl font-semibold'>Todo - List</h1>
      </div>

      {/* -----------input box------------ */}

      <div className='flex flex-row gap-3 my-6'>
        <input
          ref={inputRef}
          className='flex-1 bg-slate-200 rounded-full border-0 outline-none h-12 sm:h-14 pl-4 sm:pl-6 pr-2 placeholder:text-slate-600 text-base sm:text-lg'
          placeholder='Enter Your Task'
          type="text"
        />
        <button button
          onClick={add}
          className='border-0 rounded-full bg-orange-600 w-full sm:w-12 h-12 sm:h-14 text-white cursor-pointer font-medium text-base sm:text-lg flex items-center justify-center'
        >
          <lord-icon
            src="https://cdn.lordicon.com/efxgwrkc.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff,tertiary:#ffffff"
          >
          </lord-icon>
        </button>
      </div>

      {/* -----------Todo list------------ */}

      <div>
        {todoList.map((item, index) => {
          return <Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
        })}
      </div>
    </div>
  )
}

export default Todo
