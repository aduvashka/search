import {combineReducers } from 'redux';
import {dataFetchReducer} from './dataApi/apiReducer'

const rootReducer = combineReducers({
    dataFetch: dataFetchReducer,
});

export default rootReducer;