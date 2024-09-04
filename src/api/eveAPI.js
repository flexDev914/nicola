import axios from "axios"
import endpoint from "../config/config"


const getEvents = async () => {
    try {
        let response = await axios.get(`${endpoint}/events`)
        return await response.data
    } catch (err) {
        console.log(err)
    }
}

const insertEve = async (data) => {
    try {
        let response = await axios.post(`${endpoint}/events`, data)
        return await response.data
    } catch (err) {
        console.log(err)
    }
}

const deleteEve = async (_id) => {
    try {
        let response = await axios.delete(`${endpoint}/events/${_id}`)
        return await response.data
    } catch (err) {
        console.log(err)
    }
}

export { getEvents, insertEve, deleteEve }