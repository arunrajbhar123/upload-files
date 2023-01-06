import { useState, useEffect } from "react"
import axios from "axios"
export const useFetchData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://api.unsplash.com/search/photos?page=1&query=office&client_id=CrvtbUbzHzBd29vfQnk4aO0sG--8Wv2XrA2cy82iPlY').then((res) => {
            setData(res.data.results)
        }).catch((err) => {
            console.log('error')
        })
    }, [])

    return { data }

}