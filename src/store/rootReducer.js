import { combineReducers } from 'redux';
import { dataFetchReducer } from './dataApi/apiReducer';
import { dataStoryId } from './Modal/reducers';

const rootReducer = combineReducers({
    dataFetch: dataFetchReducer,
    dataStoryId: dataStoryId,
});

export default rootReducer;