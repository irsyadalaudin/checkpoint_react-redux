import { createSlice } from '@reduxjs/toolkit';
// import { ADD_TASK, REMOVE_ALL_TASK, REMOVE_TASK, EDIT_TASK } from '../Constant/ActionType';

export const initialState = {
    list: [
        {
            id: 1,
            description: 'my activities',
            isDone: true
        }
    ]
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            return {
                list: [...state.list, action.payload],
            };
        },
        removeTask: (state, action) => {
            return {
                list: state.list.filter((task) => task.id !== action.payload),
            };
        },
        removeAllTask: (state) => {
            return {
                ...state,
                list: [],
            };
        },
        editTask: (state, action) => {
            return {
                ...state,
                list: state.list.map((task) =>
                task.id === action.payload.id ? action.payload : task
                ),
            };
        },
    },
});

export const { addTask, removeTask, removeAllTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;