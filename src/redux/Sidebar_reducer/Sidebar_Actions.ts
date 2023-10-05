import { HIDE_SIDEBAR, SHOW_SIDEBAR } from './Sidebar_ActionsType';

export const hideSidebar = () => {
    return {
        type: HIDE_SIDEBAR
    }
}
export const showsidebar = () => {
    return {
        type: SHOW_SIDEBAR
    }
}