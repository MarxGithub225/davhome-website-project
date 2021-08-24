import {GET_STORE} from '../../../actionTypes';

const initialState = {
    shop : [],
};

const newsReducer = (data = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_STORE:

        return {...data, shop: payload};
      
      default:
        return data;
    }
  };
  
  export default newsReducer;