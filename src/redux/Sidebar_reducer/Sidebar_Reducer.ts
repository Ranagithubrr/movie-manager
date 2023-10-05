import { HIDE_SIDEBAR, SHOW_SIDEBAR } from "./Sidebar_ActionsType";

const initialState = {
    sidebar: false,
};

type SidebarActionType = {
    type: "SHOW_SIDEBAR" | "HIDE_SIDEBAR"
}

export const SidebarReducer = (state = initialState, action: SidebarActionType) => {
    switch (action.type) {
        case SHOW_SIDEBAR:
            return {
                ...state,
                sidebar: true,
            }
        case HIDE_SIDEBAR:
            return {
                ...state,
                sidebar: false,
            }
        default: return state;
    }
}