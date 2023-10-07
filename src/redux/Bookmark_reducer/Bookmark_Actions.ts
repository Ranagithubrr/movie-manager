import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "./Bookmark_ActionTypes";
import { payloadtype } from "./Bookmark_Reducer"

export const addtobookmarks = (item: payloadtype) => {
    return {
        type: ADD_BOOKMARK,
        payload: item
    }
}
export const removefrombookmarks = (id: string) => {
    return {
        type: REMOVE_BOOKMARK,
        payload: id
    }
}