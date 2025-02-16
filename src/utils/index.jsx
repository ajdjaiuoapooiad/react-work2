import axios from "axios"


const productionUrl = 'https://rails-react-deploy.onrender.com/api/v1/posts'

export const customFetch = axios.create({
    baseURL: productionUrl,
})