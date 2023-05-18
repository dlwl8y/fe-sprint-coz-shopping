import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../actions/actionTypes';

const initialState = {
  productList: [],
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        error: null,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;