import React, { useState } from 'react'
import './todolist.css'
import { FaPlus, FaSadCry } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const TodoList = () => {
  const [addTodoWindow, setAddTpDoWindow] = useState(false);
  function changeAddTodoWindowState(){
    setAddTpDoWindow(!addTodoWindow);
  }
  return (
    <section className={`todo-list ${addTodoWindow && 'todo-list-narrow'}`}>
        <div className='todolist-container'>
            <div className="todo-list-header">
                <h1>Today</h1>
            </div>
            <div className="add-button" onClick={() => changeAddTodoWindowState()}>
                <FaPlus />
                <p>Add New Task</p>
            </div>
            <div className="todo-container">
                <div className='one-todo'>
                    <div className='check'></div>
                    <p className='content'>Reaserch content idea</p>
                    <FaChevronRight />
                </div>
                <div className='one-todo'>
                    <div className='check'></div>
                    <p className='content'>Print busniess card</p>
                    <FaChevronRight />
                </div>
                <div className='one-todo'>
                    <div className='check'></div>
                    <p className='content'>Renew driver liceince</p>
                    <FaChevronRight />
                </div>
                <div className='one-todo'>
                    <div className='check'></div>
                    <p className='content'>Finish english course</p>
                    <FaChevronRight />
                </div>
            </div>
        </div>
        {
            addTodoWindow && 
            <div className='new-todo-container'>
                <div className="new-todo-header">
                    <h3>Task</h3>
                    <FaPlus />
                </div>
                <div className='title-input'>
                    <input placeholder='Add task title'></input>
                </div>
                <div className='description-input'>
                    <textarea placeholder='Description'></textarea>
                </div>
            </div>
        }

    </section>
  )
}

export default TodoList