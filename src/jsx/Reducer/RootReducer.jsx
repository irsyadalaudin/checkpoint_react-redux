import { ADD_TASK, REMOVE_TASK } from '../Constant/ActionType'

const initialState = {
    tasks: [
        {
            id: 1,
            description: 'my activities',
            isDone: 'unFinished'
        }
    ]
}

// EVERY FUNCTION, WRITE HERE ! (add, remove, edit) 
const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                tasks: [...state.tasks, action.payload]
            }
        case REMOVE_TASK:
            return {
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state
    }
}

export default RootReducer