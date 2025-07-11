import {
  START_LOADING,
  END_LOADING,
  SET_SPINNER_MESSAGE,
  SET_CATALOG_CATEGORIES,
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

    case SET_CATALOG_CATEGORIES:
      return {
        ...state,
        catalog: action.payload,
      };
   
    default:
      return state;
  }
}

export default loadDataReducer;
