
// Pag fetch ng status kung connected sa database
// export const fetchData = async (): Promise<{ success: string; message: string }> => {
//     try {
//         const response = await fetch('http://localhost//react-php-ToDo-crud-API/config.php')
//         if(!response.status) {
//             throw new Error('Network response not ok')
//         }

//         const data = await response.json()
//         return data
//     } catch (error) {
//         throw new Error('Failed to fetch data: ' + error.message);
//     }
// }

// Create ito
export const createTodo = async (title: string, content: string, time:string) => {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    formData.append('time', time)

    const response = await fetch('http://localhost/react-php-ToDo-crud-API/Todo.php?action=create', {
        method: 'POST',
        body: formData
    })

    const result = await response.json()
    return result
}

//Read ito
export const getTodos = async () => {
    const response = await fetch('http://localhost/react-php-ToDo-crud-API/Todo.php?action=read') 
        const result = await response.json()
        return result
    }

//Delete ito
export const deleteTodo = async (id: string) => {
    const formData = new FormData()
    formData.append('id', id)

    const response = await fetch('http://localhost/react-php-ToDo-crud-API/Todo.php?action=delete', {
        method: 'POST',
        body: formData
    })
    
    const result = await response.json()
    return result
}