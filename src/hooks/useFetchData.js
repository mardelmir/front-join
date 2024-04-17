import { useState, useEffect } from 'react';

const useFetchData = (urlApi) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(urlApi)
                const resData = await response.json()
                setData(resData)
                setLoading(false)
            }
            catch (error) {
                setError(error)
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return { data, error, loading }
}

export default useFetchData