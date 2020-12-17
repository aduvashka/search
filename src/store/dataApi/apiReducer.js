import { FETCH_SUCCESS, FETCH_LOADED, FETCH_ERROR, CHANGE_SEARCH } from './actions'


const initialState = {
    isLoaded: false,
    isError: null,
    isResult: {},
    search: '',
};



export const dataFetchReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                isResult: action.payload,
            };
        case FETCH_LOADED:
            return {
                ...state,
                isLoaded: true,
            };
        case FETCH_ERROR:
            return {
                ...state,
                isLoaded: false,
                isError: action.error,
            };
        case CHANGE_SEARCH:
            return {
                ...state,
                search: action.payload,
            };
        default:
            return state;
    }
};
//useSelectorHook
export const getResult = state => state.isResult;
export const getLoaded = state => state.isLoaded;
export const getError = state => state.isError;








