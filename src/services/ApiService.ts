export const fetchData = async (): Promise<{ success: string; message: string }> => {
    try {
        const response = await fetch('http://localhost//react-php-ToDo-crud-API/config/database.php')
        if(!response.status) {
            throw new Error('Network response not ok')
        }

        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('Failed to fetch data: ' + error.message);
    }
}


// // src/services/apiService.ts

// export const fetchData = async (): Promise<{ success: string; message: string }> => {
//     try {
//       const response = await fetch('YOUR_API_ENDPOINT');
  
//       // Check if the response is not JSON
//       const contentType = response.headers.get('content-type');
//       if (!contentType || !contentType.includes('application/json')) {
//         throw new Error('Received non-JSON response from server');
//       }
  
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       throw new Error('Failed to fetch data: ' + error.message);
//     }
//   };
  