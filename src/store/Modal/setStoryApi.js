import { setStoryId } from './actions';

export function setStoryApi(url) {

    return (dispatch) => {
        fetch(url)
        .then((res) => res.json())
        .then(
            (story) => {
                dispatch(setStoryId(story))
            },
        )
    };
}