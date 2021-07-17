import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    loaded: false,
    error: null,
    result: {},
    search: '',
    modal: 0,
    articleId: null,
};

export const dataFetch = createSlice({
    name: 'data',
    initialState,
    reducers: {
        getFetchSuccess: (state, { payload }) => {
            state.result = payload
        },
        getFetchLoaded: (state, { payload }) => {
            state.loaded = payload
        },
        getFetchError: (state, { payload }) => {
            state.error = payload
        },
        setChangeSearch: (state, { payload }) => {
            state.search = payload
        },
        setModalIsOpen: (state, { payload }) => {
            state.modal = payload
        },
        setArticleId: (state, { payload }) => {
            state.articleId = payload
        },
    },
});

export const {
    getFetchSuccess,
    getFetchLoaded,
    getFetchError,
    setChangeSearch,
    setModalIsOpen,
    setArticleId,
} = dataFetch.actions;

export default dataFetch.reducer;


export function setFetchApi(url) {

    return (dispatch) => {
        dispatch(getFetchLoaded(true))
        fetch(url)
            .then((res) => res.json())
            .then(
                (result) => {
                    dispatch(getFetchSuccess(result))
                },
                (error) => {
                    dispatch(getFetchError(error))
                }
            )
    };
};
