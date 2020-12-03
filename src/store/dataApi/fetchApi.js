import { fetchLoaded, fetchSuccess, fetchError } from './actions';
// import React, { useEffect } from 'react';

function fetchApi() {
    let url = `https://hn.algolia.com/api/v1/search`;
    return dispatch => {
        dispatch(fetchLoaded());
        fetch(url)
        .then(res => res.json())
        .then(result => {
            dispatch(fetchSuccess(result));
        })
        .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export default fetchApi;