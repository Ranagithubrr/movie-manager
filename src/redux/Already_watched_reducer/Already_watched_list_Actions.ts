import { ADD_WATCHED, REMOVE_WATCHED } from "./Already_watched_list_ActionTypes"
import { payloadtype } from "./Already_watched_reducer"

export const addAlreadywatchlist = (item: payloadtype) => {
    return {
        type: ADD_WATCHED,
        payload: item
    }
}
export const removeAlreadywatchlist = (id: string) => {
    return {
        type: REMOVE_WATCHED,
        payload: id
    }
}