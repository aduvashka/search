import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    storyId: null,
};

export const dataStoryId = createSlice({
    name: 'storyId',
    initialState,
    reducers: {
        getStoryId: (state, { payload }) => {
            state.storyId = payload
        },
    },
});

export const { getStoryId } = dataStoryId.actions;
export default dataStoryId.reducer;

export function setStoryApi(url) {

    return (dispatch) => {
        fetch(url)
            .then((res) => res.json())
            .then(
                (story) => {
                    dispatch(getStoryId(story))
                },
            )
    };
};