import axios from "axios";
import { toast } from "react-toastify";

const API_KEY = "fe23d63bd3f03b4ba88d5d0ca2d5f461";
const BASE_URL = "https://api.themoviedb.org/3/trending/all/week";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

const getResource = async () => {
  try {
    const { data } = await axios.get(``);
    return data;
  } catch (error) {
    throw toast.error(error, {
      autoClose: 2000,
    });
  }
};

getResource();
export default getResource;
