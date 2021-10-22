import React, { useRef, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

function TodoList() {
    const [todos, setTodos] = useState([])
    const todoRef = useRef()
    const todosData = JSON.parse(localStorage.getItem('todos'))

    useEffect(() => {
        console.log(todosData)
    }, [todosData])

    const handleAddTodo = () => {
        let data = {
            todo: todoRef.current.value
        }
        localStorage.setItem('todos', JSON.stringify([...todos, data]))
        setTodos([...todos, data])
        todoRef.current.value = ''
    }

    return (
        <div className="todo px-96 pt-20">
            <div className="todo-container">
                <h1 className="text-center mb-12 text-5xl font-medium">Todolist</h1>

                <div className="input-todo flex items-center justify-between mt-6">
                    <input ref={todoRef} type="text" className="bg-gray-100 w-4/5 py-4 text-1xl text-gray-600 rounded-md focus:ring-2 focus:ring-red-500 outline-none font-medium px-4" placeholder="type your todo here.." />
                    <button className="ml-4 py-3 w-48 px-8 text-2xl rounded-md hover:bg-red-600 text-white bg-red-500" onClick={handleAddTodo}>Add todo</button>
                </div>

                <div className="todolists mt-8">
                    {
                        todosData && todosData.map((todo, index) => {
                            return <div className="todolist bg-gray-200 py-3 px-5 rounded-md mb-3" key={index}>
                            <input className="todolist-input mr-4 w-4 h-4 rounded-full" type="checkbox" value="" id={index} />
                            <label className="todolist-label text-2xl font-medium" htmlFor={index}>
                                {todo.todo}
                            </label>
                        </div>
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}

export default TodoList
