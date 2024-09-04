import axios from "axios"
import endpoint from "../config/config"


const getPublist = async () => {
  try {
    let response = await axios.get(`${endpoint}/publications`)
    return await response.data
  } catch (err) {
    console.log(err)
  }
}

const insertPub = async (formdata) => {
  try {
    let response = await axios.post(`${endpoint}/publications`, formdata)
    return await response.data
  } catch (err) {
    console.log(err)
  }
}

const deletePub = async (_id) => {
  console.log(_id)
  try {
    let response = await axios.delete(`${endpoint}/publications/${_id}`)
    return await response.data
  } catch (err) {
    console.log(err)
  }
}

export { getPublist, insertPub, deletePub }