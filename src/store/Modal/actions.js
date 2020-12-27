export const STORY_ID = 'STORY_ID';

export function setStoryId(id) {
    return {
        type: STORY_ID,
        payload: id,
    }
}