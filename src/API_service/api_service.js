import axios from "axios";
import { toast } from "react-toastify";

const API_KEY = "fe23d63bd3f03b4ba88d5d0ca2d5f461";
const BASE_URL = "https://api.themoviedb.org/3/trending/all/week";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  // total_results: 12,
  // image_type: 'photo',
  // orientation: 'horizontal',
  // per_page: 12,
};

const getResource = async () => {
  try {
    const response = await axios.get(``);
    // return hits;{data}
    console.log(response);
  } catch (error) {
    throw toast.error(error, {
      autoClose: 2000,
    });
  }
};

getResource();
export default getResource;
