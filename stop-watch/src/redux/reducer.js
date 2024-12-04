import {ADD_TO_LIST, SET_TIMER, START_TIMER, STOP_TIMER, UPDATE_TIMER} from "./actions.js";
import {combineReducers} from "redux";

const initialCounterState = {
    isCounting: false,
    value: 0,
    id: 0
}

const listInitialState = [];

const counter = (state = initialCounterState, action) => {
    switch (action.type) {
        case START_TIMER:
            return {
                ...state,
                isCounting: true
            };
        case STOP_TIMER:
            clearInterval(state.id);
            return {
                ...state,
                isCounting: false
            };
        case SET_TIMER:
            return {
                ...state,
                id: action.payload
            };
        case UPDATE_TIMER:
            return {
                ...state,
                value: state.value + 1
            };
        default:
            return state;
    }
}

const list = (state = listInitialState, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default combineReducers({
    counter,
    list
})