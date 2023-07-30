import { useSelector, useDispatch } from 'react-redux'
import { removeAllTask, removeTask, editTask } from '../store/Action/Action.js'
import { useState } from 'react'
import Task from './Task'

const ListTask = () => {
    const taskList = useSelector(state => state.list)
    const dispatch = useDispatch()
    const [isFiltered, setIsFiltered] = useState(null)
    const [task, setTask] = useState([])
    const [editingTask, setEditingTask] = useState(null)
    const [editingDescription, setEditingDescription] = useState('')
    const [editingIsDone, setEditingIsDone] = useState(false)

    const handleRemove = (taskId) => {
        dispatch(removeTask(taskId))
    }

    const handleRemoveAll = (taskId) => {
        dispatch(removeAllTask(taskId))
    }

    const handleFilter = (boolean) => {
        if (boolean === null) {
            setIsFiltered(false)
        } else {
            setTask(taskList.filter(task => task.isDone === boolean))
            setIsFiltered(true)
        }
    }

    const handleEdit = (task) => {
        setEditingTask(task)
        setEditingDescription(task.description)
        setEditingIsDone(task.isDone)
    }

    const handleSubmitEdit = (e) => {
        e.preventDefault()

    const uniqueDescripion = taskList.every((task) => task.id === editingTask.id || task.description !== editingDescription)
        if (!uniqueDescripion) {
            alert('Task already exist!')
            return
    }

        dispatch(editTask({
            ...editingTask,
            description: editingDescription,
            isDone: editingIsDone
        }))
        setEditingTask(null)
    }

// array has the values that needs to be filtered 
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