export const FETCH_LOADED = 'FETCH_LOADED';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const CHANGE_SEARCH = 'CHANGE_SEARCH';
export const MODAL_OPEN = 'MODAL_OPEN';
export const SET_ARTICLE = 'SET_ARTICLE';



export function setFetchLoaded(loaded) {
    return {
        type: FETCH_LOADED,
        payload: loaded,
    }
}

export function setFetchSuccess(result) {
    return {
        type: FETCH_SUCCESS,
        payload: result,
    }
}

export function setFetchError(error) {
    return {
        type: FETCH_ERROR,
        payload: error,
    }
}

export function setChangeSearch(search) {
    return {
        type: CHANGE_SEARCH,
        payload: search
    }
}

export function setModalIsOpen(value) {
    return {
        type: MODAL_OPEN,
        payload: value
    }
}

export function setArticleId(id) {
    return {
        type: SET_ARTICLE,
        payload: id
    }
}