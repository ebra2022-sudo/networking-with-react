import { useEffect } from "react";
import { useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => setData(data)).catch(e => console.log(e))
    }, []);
    return [data];
    
}



