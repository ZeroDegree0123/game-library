import axios from "axios";

// const req = process.env.API_KEY

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "5723b12a079a4c4f9d252443ed614720"
    }
})