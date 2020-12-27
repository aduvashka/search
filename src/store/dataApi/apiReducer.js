import {
    FETCH_SUCCESS,
    FETCH_LOADED,
    FETCH_ERROR,
    CHANGE_SEARCH,
    MODAL_OPEN,
    SET_ARTICLE,
} from './actions'


const initialState = {
    isLoaded: false,
    isError: null,
    isResult: {},
    search: '',
    modal: 0,
    idArticle: null,
};



export const dataFetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                isResult: action.payload,
            };
        case FETCH_LOADED:
            return {
                ...state,
                isLoaded: action.payload,
            };
        case FETCH_ERROR:
            return {
                ...state,
                isError: action.error,
            };
        case CHANGE_SEARCH:
            return {
                ...state,
                search: action.payload,
            };
        case MODAL_OPEN:
            return {
                ...state,
                modal: action.payload,
            }
        case SET_ARTICLE:
            return {
                ...state,
                idArticle: action.payload,
            }
        default:
            return state;
    }
};








