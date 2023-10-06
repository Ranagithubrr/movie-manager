import { WatchlistReducer } from './WatchList_reducer/Watchlist_Reducer';
import { legacy_createStore as createStore, combineReducers } from "redux";
import { SidebarReducer } from './Sidebar_reducer/Sidebar_Reducer';

const rootReducer = combineReducers({
    SidebarReducer,
    WatchlistReducer
})

const store = createStore(rootReducer);

export default store;