import { ADD_WATCHLIST, REMOVE_WATCHLIST, ADD_BOOKMARK_TO_WATCHLIST } from "./Watchlist_ActionTypes"
import { payloadtype } from "./Watchlist_Reducer"

export const addwatchlist = (item: payloadtype) => {
    return {
        type: ADD_WATCHLIST,
        payload: item
    }
}
export const addbookmarttowatchlist = (item: payloadtype) => {
    return {
        type: ADD_BOOKMARK_TO_WATCHLIST,
        payload: item
    }
}
export const removewatchlist = (id: string) => {
    return {
        type: REMOVE_WATCHLIST,
        payload: id
    }
}