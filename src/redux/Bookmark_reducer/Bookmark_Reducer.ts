import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "./Bookmark_ActionTypes";



interface BookmarkItem {
    id: string,
    episode: string,
    name: string,
    time: string
}



interface InitialStateType {
    bookmark: BookmarkItem[]
}
// using with local storage
const initialFromLocalStorage = localStorage.getItem("bookmarkstate");
const InitialState: InitialStateType = initialFromLocalStorage
    ? JSON.parse(initialFromLocalStorage)
    : {
        bookmark: [],
    };

export interface payloadtype {
    id: string,
    episode: string,
    name: string,
    time: string
}

type ActionType = {
    type: "ADD_BOOKMARK",
    payload: payloadtype
} |
{
    type: "REMOVE_BOOKMARK",
    payload: string
}


export const BookmarkReducer = (state = InitialState, action: ActionType) => {
    switch (action.type) {
        case ADD_BOOKMARK:
            if (!state.bookmark.some((item) => item.id === action.payload.id)) {
                const updatedState = {
                    ...state,
                    bookmark: [...state.bookmark, action.payload],
                };
                localStorage.setItem("bookmarkstate", JSON.stringify(updatedState));
                return updatedState;
            } else {
                const idToRemove = action.payload.id;
                const updatedBookmark = state.bookmark.filter((item) => item.id !== idToRemove);
                const updatedState = {
                    ...state,
                    bookmark: updatedBookmark,
                };
                // Save the updated state to local storage.
                localStorage.setItem("bookmarkstate", JSON.stringify(updatedState));
                return updatedState;
            }
        case REMOVE_BOOKMARK:
            const idToRemove = action.payload;
            const updatedBookmark = state.bookmark.filter((item) => item.id !== idToRemove);
            const updatedState = {
                ...state,
                bookmark: updatedBookmark,
            };
            // Save the updated state to local storage.
            localStorage.setItem("bookmarkstate", JSON.stringify(updatedState));
            return updatedState;
        default:
            return state;
    }
}