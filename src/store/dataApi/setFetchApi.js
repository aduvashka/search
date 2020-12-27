import { setFetchSuccess, setFetchLoaded, setFetchError } from './actions';

export function setFetchApi(url) {

    return (dispatch) => {
        dispatch(setFetchLoaded(true))
        fetch(url)
        .then((res) => res.json())
        .then(
            (result) => {
            console.log("🚀 ~ file: setFetchApi.js ~ line 12 ~ return ~ result", result)
                dispatch(setFetchSuccess(result))
            },
            (error) => {
                dispatch(setFetchError(error))
            }
        )
    };
}
