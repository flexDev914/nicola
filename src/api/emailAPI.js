import axios from "axios";
import endpoint from "../config/config";

const getEmails = async () => {
  try {
    let response = await axios.get(`${endpoint}/emails`);
    return await response.data;
  } catch (err) {
    console.log(err);
  }
};

const insertEmail = async (data) => {
  try {
    let response = await axios.post(`${endpoint}/emails`, data);
    return await response.data;
  } catch (err) {
    console.log(err);
  }
};

const deleteEmail = async (_id) => {
  try {
    let response = await axios.delete(`${endpoint}/emails/${_id}`);
    return await response.data;
  } catch (err) {
    console.log(err);
  }
};

const sendEmail = async (data) => {
  try {
    const response = await axios.post(`${endpoint}/sendEmail`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getEmails, insertEmail, deleteEmail, sendEmail };
