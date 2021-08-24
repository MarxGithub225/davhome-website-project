import {GET_STORE, SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILED} from '../../../actionTypes';

import api from '../api';

export const getStore = () => async (dispatch) => {

  
  try {
    const { data } = await api.getStore();

    dispatch({
      type: GET_STORE,
      payload: data.data,
    });
  } catch (error) {
    console.log(error)
  }


};

export const setOrder = (data) => async (dispatch) => {


   dispatch({
    type: SEND_MESSAGE_REQUEST
  });

  try {
    const res = await api.setOrder(data);
    
    if(res.data.status) {
      dispatch({
        type: SEND_MESSAGE_SUCCESS,
      });
    }else {
      dispatch({
        type: SEND_MESSAGE_FAILED,
      });
    }
    
  } catch (error) {
    console.log('Send Message Error', error)

    dispatch({
      type: SEND_MESSAGE_FAILED,
    });
  }



};
