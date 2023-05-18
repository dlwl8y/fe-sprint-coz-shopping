import axios from 'axios';
import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './actionTypes';


const fetchDataAction = async (dispatch) => {
  try {
    const response = await axios.get("http://cozshopping.codestates-seb.link/api/v1/products");
    const data = response.data;

    dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching data:", error);
    dispatch({ type: FETCH_DATA_ERROR, payload: error.message });
  }
};

export default fetchDataAction;