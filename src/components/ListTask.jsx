// IMPORTING REQUIRED MODULES
import { useSelector, useDispatch } from 'react-redux'
import { removeAllTask, removeTask, editTask } from '../store/Reducer/RootReducer.js'
import { useState } from 'react'
import Task from './Task'

// DEFINING THE LISTTASK COMPONENT
const ListTask = () => {
    // STATE MANAGEMENT USING HOOKS
    const taskList = useSelector(state => state.list)
    const dispatch = useDispatch()
    const [isFiltered, setIsFiltered] = useState(null)
    const [task, setTask] = useState([])
    const [editingTask, setEditingTask] = useState(null)
    const [editingDescription, setEditingDescription] = useState('')
    const [editingIsDone, setEditingIsDone] = useState(false)

    // HANDLING TASK REMOVAL
    const handleRemove = (taskId) => {
        dispatch(removeTask(taskId))        // Dispatching the 'removeTask' action with the task ID to remove the task from the Redux store.
    }

    // HANDLING REMOVING ALL TASKS
    const handleRemoveAll = (taskId) => {   // Dispatching the 'removeAllTask' action to remove all tasks from the Redux store.
        dispatch(removeAllTask(taskId))
    }

    // HANDLING TASK FILTERING
    const handleFilter = (boolean) => {
        if (boolean === null) {             // If the filter is set to null, indicating 'show all' option, set 'isFiltered' state to false.
            setIsFiltered(false)
        } else {                            // If a specific filter option (true or false) is selected, filter tasks based on the completion status and update the 'isFiltered' state to true.
            setTask(taskList.filter(task => task.isDone === boolean))
            setIsFiltered(true)
        }
    }

    // HANDLING TASK EDITING
    const handleEdit = (task) => {
        setEditingTask(task)                       // Setting the 'editingTask' state with the selected task to be edited.
        setEditingDescription(task.description)    // Setting the 'editingDescription' state with the description of the selected task to be edited.
        setEditingIsDone(task.isDone)              // Setting the 'editingIsDone' state with the completion status of the selected task to be edited.
    }

    // HANDLING EDITED TASK SUBMISSION
    const handleSubmitEdit = (e) => {
        e.preventDefault()                         // Preventing the default form submission behavior.

        // Checking if the edited description is unique among the tasks in the taskList.
        const uniqueDescripion = taskList.every((task) => task.id === editingTask.id || task.description !== editingDescription)
            if (!uniqueDescripion) {
                alert('Task already exist!')       // Showing an alert if the edited description already exists in another task.
                return
        }

        // Dispatching the 'editTask' action with the updated task information to update the task in the Redux store.
        dispatch(editTask({
            ...editingTask,
            description: editingDescription,
            isDone: editingIsDone
        }))
        setEditingTask(null)                       // Resetting the 'editingTask' state to null after task is edited.
    }

    // RENDERING THE COMPONENT
    return (
        <div className='d-flex justify-content-center'>
            <div>
                <div className='bg-success-subtle rounded-bottom-4 pt-2 pb-1 mb-3 sticky-top d-flex justify-content-center flex-column ' style={{width: '750.56px', top: '10em'}}>
                    <button className='btn btn-success rounded-0' onClick={() => handleFilter(true)}>finished</button>
                    <button className='btn btn-success rounded-0' onClick={() => handleFilter(false)}>unfinished</button>
                    <button className='btn btn-success rounded-0 rounded-bottom-4' onClick={() => handleFilter(null)}>show all</button>
                </div>

                {/* conditional rendering */}
                {!isFiltered 
                ? taskList.map((task) => (
                    <div className='text-white' key={task.id}>
                        <Task key={task} {...task} />
                        <button className='btn bg-success-subtle mx-1 mb-4' onClick={() => handleRemove(task.id)}>Delete</button>
                        <button className='btn bg-success-subtle mx-1 mb-4' onClick={() => handleEdit(task)}>edit</button>

                        {editingTask && editingTask.id === task.id && (
                            <form onSubmit={handleSubmitEdit}>
                                <input className='bg-light text-body' type='text' value={editingDescription} onChange={e => setEditingDescription(e.target.value)} />
                                <select className='ms-1 bg-light text-body' value={editingIsDone} onChange={e => setEditingIsDone(e.target.value === 'true')}>
                                    <option value='true'>finished</option>
                                    <option value='false'>unfinished</option>
                                </select>
                                <button className='ms-1 btn btn-light bg-success-subtle' type='submit'>save</button>
                            </form>
                        )}
                    </div>
                )) 
                : task.map((task) => (
                    <div className='text-white' key={task.id}>
                        <Task key={task} {...task} />
                        <button className='btn bg-success-subtle mx-1 mb-4' onClick={() => handleRemove(task.id)}>Delete</button>
                        <button className='btn bg-success-subtle mx-1 mb-4' onClick={() => handleEdit(task)}>edit</button>

                        {editingTask && editingTask.id === task.id && (
                            <form onSubmit={handleSubmitEdit}>
                                <input className='bg-light text-body' type='text' value={editingDescription} onChange={e => setEditingDescription(e.target.value)} />
                                <select className='ms-1 bg-light text-body' value={editingIsDone} onChange={e => setEditingIsDone(e.target.value === 'true')}>
                                    <option value='true'>finished</option>
                                    <option value='false'>unfinished</option>
                                </select>
                                <button className='ms-1 btn btn-light bg-success-subtle' type='submit'>save</button>
                            </form>
                        )}
                    </div>
                ))}

                <br />
                <button className='mb-5 btn btn-danger' onClick={handleRemoveAll} style={{width: '750.56px'}}>Delete All</button>
            </div>
        </div>
    )
}

export default ListTask



/*
<Task key={task} {...task} />
const task = {
    id: 1,
    description: "Mengerjakan tugas",
    isDone: false,
};
*/