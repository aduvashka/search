import { FETCH_SUCCESS, FETCH_LOADED, FETCH_ERROR } from './actions'


const initialState = {
    isLoaded: false,
    isError: null,
    isUrlApi:'',
};



export const dataFetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                isUrlApi: action.payload,
                isLoading: false,
                isError: false
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
        default:
            return state;
    }
};
//useSelectorHook
export const getUrlApi = state => state.isUrlApi;
export const getLoaded = state => state.isLoaded;
export const getError = state => state.isError;








