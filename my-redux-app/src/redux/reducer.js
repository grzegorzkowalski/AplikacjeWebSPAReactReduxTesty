import {ADD_TO_LIST, SET_TIMER_ID, START_TIMER, STOP_TIMER, UPDATE_TIMER} from "./actions.js";

const initialState = {
    "isCounting": false,
    "value": 0,
    "id": 0,
    "list": []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER:
            return {
                ...state,
                isCounting: true
            }
        case STOP_TIMER:
            clearInterval(state.id);
            return {
                ...state,
                isCounting: false
            }
        case SET_TIMER_ID:
            return {
                ...state,
                id: action.payload
            }
        case UPDATE_TIMER:
            return {
                ...state,
                value: state.value + 1
            }
        case ADD_TO_LIST: {
            return {
                ...state,
                list: [...state.list, state.value]
            }
        }
        default:
            return state;
    }
}

export default reducer;