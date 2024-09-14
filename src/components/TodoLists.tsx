import { useState } from 'react'
import { useTodos } from '../hooks/useTodos'


const TodoLists = () => {
    const { todos, loading, addTodo, removeTodo } = useTodos()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [time, setTime] = useState('')
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addTodo(title, content, time)
        setTitle('')
        setContent('')
        setTime('')
    }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title'
            />
            <input
                type='text'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='Content'
                />
                <input 
                    type='text'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder='Time'
                    />
                <button type='submit'>add todo</button>
        </form>

        { loading && <p>Loading...</p>}

        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <span>{todo.title}</span>
                    <span>{todo.content}</span>
                    <button onClick={() => removeTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>

      </div>
    </>
  )
}

export default TodoLists
