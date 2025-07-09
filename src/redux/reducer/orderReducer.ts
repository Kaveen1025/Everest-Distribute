
import {orderDataType} from '../../type';

const initialState: orderDataType = {
  orderData: [],
};

function orderDataReducer(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

export default orderDataReducer;
