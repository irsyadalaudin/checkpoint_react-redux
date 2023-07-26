import { ADD_TASK, REMOVE_TASK, REMOVE_ALL_TASK } from '../Constant/ActionType'

// EVERY FUNCTION, WRITE HERE ! (add, remove, edit) 
export const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export const removeTask = (taskId) => {
    return {
        type: REMOVE_TASK,
        payload: taskId
    }
}

export const removeAllTask = (taskId) => {
    return {
        type: REMOVE_ALL_TASK,
        payload: taskId
    }
}