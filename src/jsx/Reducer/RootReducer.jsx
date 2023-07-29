import { ADD_TASK, REMOVE_ALL_TASK, REMOVE_TASK, EDIT_TASK } from '../Constant/ActionType'

const initialState = {
    list: [
        {
            id: 1,
            description: 'my activities',
            isDone: true
        }
    ]
}

// EVERY FUNCTION, WRITE HERE ! (add, remove, edit) 
const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                list: [...state.list, action.payload]
            }
        case REMOVE_TASK:
            return {
                list: state.list.filter(task => task.id !== action.payload)
            }
        case REMOVE_ALL_TASK:
            return {
                ...state, list: []
            }
        case EDIT_TASK:
            return {
                ...state, list: state.list.map(task => task.id === action.payload.id ? action.payload : task)
            }
        default:
            return state
    }
}

export default RootReducer