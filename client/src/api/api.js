import axios from 'axios'

const getData = async (url, data = {}, method = "GET") => {
    const response = await axios({
        baseURL: 'http://localhost:3001',
        method,
        url,
        data,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return response
}

export default getData
