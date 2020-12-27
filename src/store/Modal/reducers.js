import { STORY_ID } from './actions'

const initialState = {
    storyId: null,
};

export const dataStoryId = (state = initialState, action) => {
    switch (action.type) {
        case STORY_ID:
            return {
                ...state,
                storyId: action.payload,
            };
        default:
            return state;
    }
};