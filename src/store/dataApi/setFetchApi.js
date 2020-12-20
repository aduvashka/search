import {  setFetchSuccess, setFetchLoaded, setFetchError,} from './actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

export function setFetchApi(url) {

    return (dispatch) => {
        dispatch(setFetchLoaded(true))
        fetch(url)
        .then((res) => res.json())
        .then(
            (result) => {
                dispatch(setFetchSuccess(result))
        },
            (error) => {
                dispatch(setFetchError(error))
         }
        )
    }
}


// export function setFetchApi(url) {
    // const dispatch = useDispatch();
//         useEffect(() => {
//             fetch(url)
//             .then((res) => res.json())
//             .then(
//                 (result) => {
//                     dispatch(setFetchLoaded(true));
//                     dispatch(setFetchSuccess(result))
//                 },
//                 (error) => {
//                     dispatch(setFetchLoaded(true));
//                     dispatch(setFetchError(error))
//                 }
//             )

//       }, [url]);
// };