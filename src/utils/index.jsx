import axios from "axios"


const productionUrl = 'http://localhost:3001/api/v1/posts'

export const customFetch = axios.create({
    baseURL: productionUrl,
    headers: {
        'Content-Type': 'application/json',
    },
})