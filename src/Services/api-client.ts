import axios from "axios";

// const req = process.env.API_KEY

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
    }
})