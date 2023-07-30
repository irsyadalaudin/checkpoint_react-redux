import { useSelector, useDispatch } from 'react-redux'
import { removeAllTask, removeTask, editTask } from '../JSX/Action/Action'
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
        dispatch(editTask({
            ...editingTask,
            description: editingDescription,
            isDone: editingIsDone
        }))
        setEditingTask(null)
    }

// array has the values that needs to be filtered 
    return (
        <>
            <button onClick={() => handleFilter(true)}>finished</button>
            <button onClick={() => handleFilter(false)}>unfinished</button>
            <button onClick={() => handleFilter(null)}>show all</button>

            {/* conditional rendering */}
            {!isFiltered 
            ? taskList.map((task) => (
                <div key={task.id}>
                    <Task key={task} {...task} />
                    <button onClick={() => handleRemove(task.id)}>Delete</button>
                    <button onClick={() => handleEdit(task)}>edit</button>

                    {editingTask && editingTask.id === task.id && (
                        <form onSubmit={handleSubmitEdit}>
                            <input type='text' value={editingDescription} onChange={e => setEditingDescription(e.target.value)} />
                            <select value={editingIsDone} onChange={e => setEditingIsDone(e.target.value === 'true')}>
                                <option value='true'>finished</option>
                                <option value='false'>unfinished</option>
                            </select>
                            <button type='submit'>save</button>
                        </form>
                    )}
                </div>
            )) 
            : task.map((task) => (
                <div key={task.id}>
                    <Task key={task} {...task} />
                    <button onClick={() => handleRemove(task.id)}>Delete</button>
                    <button onClick={() => handleEdit(task)}>edit</button>

                    {editingTask && editingTask.id === task.id && (
                        <form onSubmit={handleSubmitEdit}>
                            <input type='text' value={editingDescription} onChange={e => setEditingDescription(e.target.value)} />
                            <select value={editingIsDone} onChange={e => setEditingIsDone(e.target.value === 'true')}>
                                <option value='true'>finished</option>
                                <option value='false'>unfinished</option>
                            </select>
                            <button type='submit'>save</button>
                        </form>
                    )}
                </div>
            ))}

            <br />
            <button onClick={handleRemoveAll}>Delete All</button>
        </>
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