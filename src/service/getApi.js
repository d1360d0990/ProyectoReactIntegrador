import axios from "axios";

export const getevents = async (url) => {
  try {
    const response = await axios.get(url,{});
    console.log(response);
    
    return response.data;
  } catch (error) {
    console.error(error);
  }
};