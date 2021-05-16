import {
    TASK_SUCCESS,
    TASK_FAIL,
    GET_ALL_TASK_FAIL,
    GET_ALL_TASK_SUCCESS,
    GET_ALL_SUB_TASK_FAIL,
    GET_ALL_SUB_TASK_SUCCESS,
    SUB_TASK_FAIL,
    SUB_TASK_SUCCESS,
    EDIT_SUB_TASK_FAIL,
    EDIT_SUB_TASK_SUCCESS
} from "../actions/types";

const initialState = {
    taskList: null,
    subTaskList: null
};

const task = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case TASK_SUCCESS:
            return { ...state, };

        case TASK_FAIL:
            return { ...state, };

        case GET_ALL_TASK_SUCCESS:
            return { ...state, taskList: payload.taskList.data };

        case GET_ALL_TASK_FAIL:
            return { ...state, };

        case SUB_TASK_SUCCESS:
            return { ...state, };

        case SUB_TASK_FAIL:
            return { ...state, };

        case GET_ALL_SUB_TASK_SUCCESS:
            return { ...state, subTaskList: payload.subTaskList.data };

        case GET_ALL_SUB_TASK_FAIL:
            return { ...state, };

        case EDIT_SUB_TASK_SUCCESS:
            return { ...state, };

        case EDIT_SUB_TASK_FAIL:
            return { ...state, };


        default:
            return state;
    }
}

export default task