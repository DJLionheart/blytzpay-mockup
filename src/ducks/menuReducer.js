const initialState = {
    menuOpen: false
}

const TOGGLE_MENU = 'TOGGLE_MENU';

export function toggle_menu() {
    console.log('menu toggle!')
    return {
        type: TOGGLE_MENU
    }
}

export default function menuReducer(state = initialState, action) {
    switch(action.type) {

        case TOGGLE_MENU: 
            return Object.assign({}, state, {menuOpen: state.menuOpen ? false : true});

        default:
            return state;
    }
}