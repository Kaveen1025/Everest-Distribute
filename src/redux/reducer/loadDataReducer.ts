import {
  START_LOADING,
  END_LOADING,
  SET_SPINNER_MESSAGE,
} from '../../constant/ReduxConstant';
import {loadDataType} from '../../type';

const initialState: loadDataType = {
  customerData: [],
  areaData: [],
  productData: [],
  refData: [],
  customerDataAccoRef: [],
  areaDataAccoRef: [],
  catalog: [],
  catalogData: [],
  allOrders: [],
  repsAccoManager: [],
  repsDetailsAccoManager: [],
  customerDataWithOutstanding: [],
  salesDetails: [],
  outstandingDetails: [],
  salesDetailsAllReps: [],
};

function loadDataReducer(state = initialState, action: any) {
  switch (action.type) {
   
    default:
      return state;
  }
}

export default loadDataReducer;
