import axios from 'axios'

export const axiosInstance= axios.create({
    baseURL:"https://hcfpk.herokuapp.com/server/"
})
