import { useState, useEffect } from "react";
import {getTodos, createTodo, deleteTodo } from '../services/ApiService'

// types ng variables
type Todo = {
    id: string
    title: string
    content: string
    time: string
}


export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState<boolean>(false)

// Hooks para kay get todo
    useEffect(() => {
        const fetchTodos = async ()=> {
            setLoading(true)
            const result = await getTodos()
            if (result.success) {
                setTodos(result.todos)
            }
            setLoading(false)
        }
        fetchTodos()
    }, [])
// Hooks para kay add todo
    const addTodo = async (title: string, content: string, time: string) => {
        const result = await createTodo(title, content, time)
        if(result.succes) {
            setTodos(prev => [...prev, { id: result.id, title, content, time }])
        }
    } 

//Hooks para sa remove todo
const removeTodo = async (id:string) => {
    const result = await deleteTodo(id)
    if (result.succes) {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }
}

return { todos, loading, addTodo, removeTodo }

}