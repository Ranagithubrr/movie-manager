import { ADD_WATCHED, REMOVE_WATCHED } from "./Already_watched_list_ActionTypes";

interface AlreadyWatchlistItem {
    id: string,
    episode: string,
    name: string,
    time: string
}



interface InitialStateType {
    Alreadywatchlist: AlreadyWatchlistItem[]
}
// using with local storage
const initialFromLocalStorage = localStorage.getItem("alreadywatchlist");
const InitialState: InitialStateType = initialFromLocalStorage
    ? JSON.parse(initialFromLocalStorage)
    : {
        Alreadywatchlist: [],
    };

export interface payloadtype {
    id: string,
    episode: string,
    name: string,
    time: string
}

type ActionType = {
    type: "ADD_WATCHED",
    payload: payloadtype
} |
{
    type: "REMOVE_WATCHED",
    payload: string
}


export const AlreadyWatchlistReducer = (state = InitialState, action: ActionType) => {
    switch (action.type) {
        case ADD_WATCHED:
            if (!state.Alreadywatchlist.some((item) => item.id === action.payload.id)) {
                const updatedState = {
                    ...state,
                    Alreadywatchlist: [...state.Alreadywatchlist, action.payload],
                };
                localStorage.setItem("alreadywatchlist", JSON.stringify(updatedState));
                return updatedState;
            } else {
                return state;
            }
        case REMOVE_WATCHED:
            const idToRemove = action.payload;
            const updatedWatchlist = state.Alreadywatchlist.filter((item) => item.id !== idToRemove);
            const updatedState = {
                ...state,
                Alreadywatchlist: updatedWatchlist,
            };
            // Save the updated state to local storage.
            localStorage.setItem("alreadywatchlist", JSON.stringify(updatedState));
            return updatedState;
        default:
            return state;
    }
}