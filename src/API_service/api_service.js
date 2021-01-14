import axios from "axios";
import { toast } from "react-toastify";

const API_KEY = "fe23d63bd3f03b4ba88d5d0ca2d5f461";
const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrending = async (page = 1) => {
  try {
    const { data } = await axios.get(`/trending/movie/day?page=${page}`);
    return data;
  } catch (error) {
    throw toast.error(error, {
      autoClose: 2000,
    });
  }
};

export const getSearchMovie = async (query, page = 1) => {
  try {
    const { data } = await axios.get(
      `/search/movie?query=${query}&page=${page}`
    );
    return data;
  } catch (error) {
    throw toast.error(error, {
      autoClose: 2000,
    });
  }
};

export const getMovieDetails = async (movie_id) => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}`);
    return data;
  } catch (error) {
    throw toast.error(error, {
      autoClose: 2000,
    });
  }
};

export const getMovieDetailsCast = async (movie_id, links) => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}/${links}`);
    return data;
  } catch (error) {
    throw toast.error(error, {
      autoClose: 2000,
    });
  }
};
