import { ADD_WATCHLIST, REMOVE_WATCHLIST } from "./Watchlist_ActionTypes";



interface WatchlistItem {
    id: string,
    episode: string,
    name: string,
    time: string
}



interface InitialStateType {
    watchlist: WatchlistItem[]
}
// using with local storage
const initialFromLocalStorage = localStorage.getItem("watchlistState");
const InitialState: InitialStateType = initialFromLocalStorage
    ? JSON.parse(initialFromLocalStorage)
    : {
        watchlist: [],
    };

export interface payloadtype {
    id: string,
    episode: string,
    name: string,
    time: string
}

type ActionType = {
    type: "ADD_WATCHLIST",
    payload: payloadtype
} |
{
    type: "REMOVE_WATCHLIST",
    payload: string
}


export const WatchlistReducer = (state = InitialState, action: ActionType) => {
    switch (action.type) {
        case ADD_WATCHLIST:
            if (!state.watchlist.some((item) => item.id === action.payload.id)) {
                const updatedState = {
                    ...state,
                    watchlist: [...state.watchlist, action.payload],
                };
                localStorage.setItem("watchlistState", JSON.stringify(updatedState));
                return updatedState;
            } else {
                const idToRemove = action.payload.id;
                const updatedWatchlist = state.watchlist.filter((item) => item.id !== idToRemove);
                const updatedState = {
                    ...state,
                    watchlist: updatedWatchlist,
                };
                // Save the updated state to local storage.
                localStorage.setItem("watchlistState", JSON.stringify(updatedState));
                return updatedState;
            }
        case REMOVE_WATCHLIST:
            const idToRemove = action.payload;
            const updatedWatchlist = state.watchlist.filter((item) => item.id !== idToRemove);
            const updatedState = {
                ...state,
                watchlist: updatedWatchlist,
            };
            // Save the updated state to local storage.
            localStorage.setItem("watchlistState", JSON.stringify(updatedState));
            return updatedState;
        default:
            return state;
    }
}