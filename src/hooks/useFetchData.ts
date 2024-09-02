import { useEffect, useState } from 'react';
import { fetchData } from '../services/ApiService'

const usefetchData = () => {
    const [data, setData] = useState<{ success: string; message: string } | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const getData = async () => {
            try{
                const result = await fetchData()
                setData(result)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getData()
    },[])

    return {data, error, loading}
}

export default usefetchData