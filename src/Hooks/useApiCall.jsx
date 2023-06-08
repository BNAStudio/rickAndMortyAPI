/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

export const useApiCall = (url) => {
    const [loading, setLoading] = useState(true)
    const [dataInfo, setDataInfo] = useState([]);

    const fetchApi = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (dataInfo) { setDataInfo(data) }
        } catch (error) {
            console.error(error);
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchApi()
    }, [url])

    return [dataInfo, loading]
}