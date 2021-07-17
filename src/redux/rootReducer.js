import { combineReducers } from 'redux';
import dataFetchReducer from './dataApi';
import dataStoryId from './modal';

const rootReducer = combineReducers({
    dataFetch: dataFetchReducer,
    dataStoryId: dataStoryId,
});

export default rootReducer;