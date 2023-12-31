import { BookmarkReducer } from './Bookmark_reducer/Bookmark_Reducer';
import { AlreadyWatchlistReducer } from './Already_watched_reducer/Already_watched_reducer';
import { WatchlistReducer } from './WatchList_reducer/Watchlist_Reducer';
import { legacy_createStore as createStore, combineReducers } from "redux";
import { SidebarReducer } from './Sidebar_reducer/Sidebar_Reducer';

export const rootReducer = combineReducers({
    SidebarReducer,
    WatchlistReducer,
    AlreadyWatchlistReducer,
    BookmarkReducer
});

export type RootState = ReturnType<typeof rootReducer>;


const store = createStore(rootReducer);

export default store;