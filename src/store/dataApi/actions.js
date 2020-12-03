export const FETCH_LOADED = 'FETCH_LOADED';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export function fetchLoaded() {
    return {
        type: FETCH_LOADED,
    }
}

export function fetchSuccess(result) {
    return {
        type: FETCH_SUCCESS,
        isUrlApi: result,
    }
}

export function fetchError(error) {
    return {
        type: FETCH_ERROR,
        isError: error,
    }
}

