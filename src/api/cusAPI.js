import axios from "axios"
import endpoint from "../config/config"


const getCustoms = async () => {
    try {
        let response = await axios.get(`${endpoint}/customs`)
        return await response.data
    } catch (err) {
        console.log(err)
    }
}

const insertCus = async (formdata) => {
    try {
        let response = await axios.post(`${endpoint}/customs`, formdata)
        return await response.data
    } catch (err) {
        console.log(err)
    }
}

const deleteCus = async (_id) => {
    try {
        let response = await axios.delete(`${endpoint}/customs/${_id}`)
        return await response.data
    } catch (err) {
        console.log(err)
    }
}

export { getCustoms, insertCus, deleteCus }