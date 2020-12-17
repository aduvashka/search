export const FETCH_LOADED = 'FETCH_LOADED';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const CHANGE_SEARCH = 'CHANGE_SEARCH';



export function setFetchLoaded(loaded) {
    return {
        type: FETCH_LOADED,
        payload: loaded
    }
}

export function setFetchSuccess(result) {
    return {
        type: FETCH_SUCCESS,
        payload: result
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
