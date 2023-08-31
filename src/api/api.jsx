import axios from "axios"
import { useEffect, useState } from "react"

export function NotaSimulado(simulado) {

    const [data, setData] = useState(null)

    const api = 'https://script.google.com/macros/s/AKfycbwfpNvq40kYSEUxOoXjKGZOYe9wLwMtXAXPq7hbfQWwTPq6u2B5zDQ8AmDs-s6HmhH8sg/exec'

    useEffect(() => {
        if(simulado == '1sas') {
            axios.get(api + '?edsas=1sas')
            .then(response => setData(response.data))
            .catch(error => console.log(error))
        }
    }, [])

    return <p></p>
}