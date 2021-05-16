import {
    SET_MESSAGE,
    TASK_SUCCESS,
    TASK_FAIL,
    GET_ALL_TASK_FAIL,
    GET_ALL_TASK_SUCCESS,
    SUB_TASK_SUCCESS,
    SUB_TASK_FAIL,
    GET_ALL_SUB_TASK_FAIL,
    GET_ALL_SUB_TASK_SUCCESS,
    EDIT_SUB_TASK_SUCCESS,
    EDIT_SUB_TASK_FAIL
} from "./types";

import TaskService from "../services/task.service";

/**
   * saveTask
   * @param {*} 
   */
export const saveTask = (data) => (dispatch) => {
    return TaskService.saveTask(data).then(
        (response) => {
            dispatch({
                type: TASK_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: TASK_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};


export const getTasks = () => (dispatch) => {
    return TaskService.getTasks().then(
        (response) => {
            dispatch({
                type: GET_ALL_TASK_SUCCESS,
                payload: { taskList: response.data },
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: GET_ALL_TASK_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const saveSubTask = (data) => (dispatch) => {
    return TaskService.saveSubTask(data).then(
        (response) => {
            dispatch({
                type: SUB_TASK_SUCCESS,
                payload: response.data,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: SUB_TASK_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const getSubTasks = () => (dispatch) => {
    return TaskService.getSubTasks().then(
        (response) => {
            dispatch({
                type: GET_ALL_SUB_TASK_SUCCESS,
                payload: { subTaskList: response.data },
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: GET_ALL_SUB_TASK_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const editSubTask = (data) => (dispatch) => {
    return TaskService.editSubTask(data).then(
        (response) => {
            dispatch({
                type: EDIT_SUB_TASK_SUCCESS,
                payload: { subTaskList: response.data },
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: EDIT_SUB_TASK_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};