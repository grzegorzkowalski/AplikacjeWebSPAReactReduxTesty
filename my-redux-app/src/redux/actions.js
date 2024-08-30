const START_TIMER = "START_TIMER";
const STOP_TIMER = "STOP_TIMER";
const UPDATE_TIMER = "UPDATE_TIMER";
const SET_TIMER_ID = "SET_TIMER_ID";
const ADD_TO_LIST = "ADD_TO_LIST";

const startTimer = () => {
    return {
        type: START_TIMER
    }
}

const updateTimer = () => {
    return {
        type: UPDATE_TIMER
    }
}

const setID = (id) => {
    return {
        type: SET_TIMER_ID,
        payload: id
    }
}

const startCounter = () => {
    return (dispatch) => {
        dispatch(startTimer())
        const id = setInterval(() => {
            dispatch(updateTimer());
        }, 1000);
        dispatch(setID(id));
    }
}

const stopCounter = () => {
    return {
        type: STOP_TIMER
    }
}

const addToList = () => {
    return {
        type: ADD_TO_LIST
    }
}

export {
    START_TIMER,
    STOP_TIMER,
    SET_TIMER_ID,
    UPDATE_TIMER,
    ADD_TO_LIST,
    stopCounter,
    startCounter,
    addToList
}