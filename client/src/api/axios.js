import axios from "axios"
const URL_SERVER = process.env.REACT_APP_URL_SERVER
const axiosInstance=axios.create({
    baseURL:URL_SERVER,
 
})

export default axiosInstance