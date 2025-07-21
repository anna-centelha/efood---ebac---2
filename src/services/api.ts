import axios from 'axios'

const api = axios.create({
    baseURL: 'https://fake-api-tau.vercel.app/api/efood'
})

export default api