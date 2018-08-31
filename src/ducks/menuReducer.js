const initialState = {
    menuOpen: false
}

const TOGGLE_MENU = 'TOGGLE_MENU';

export function toggle_menu() {
    return {
        type: TOGGLE_MENU
    }
}

export default function menuReducer(state = initialState, action) {
    switch(action.type) {

        case TOGGLE_MENU: 
            let boolean;
            state.menuOpen ? boolean = false : boolean = true;
            return Object.assign({}, state, {menuOpen: boolean});

        default:
            return state;
    }
}