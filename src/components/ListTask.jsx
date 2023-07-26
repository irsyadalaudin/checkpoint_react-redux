import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeAllTask, removeTask } from '../JSX/Action/Action'
import { useState } from 'react'

const ListTask = () => {
    const taskList = useSelector(state => state.tasks)

    const dispatch = useDispatch()
    const [isfiltered, setIsFiltered] = useState(false)
    const [tasks, setTasks] = useState([])

    const handleRemove = (taskId) => {
        dispatch(removeTask(taskId))
    }

    const handleRemoveAll = () => {
        dispatch(removeAllTask())
    }

    const handleFilter = (boolean) => {
        if (boolean === null){
            setIsFiltered(false)
        }
        else {
            setTasks(taskList.filter(task => task.isDone === boolean ))
            setIsFiltered(true);
        }
    }
    return (
        <>
            <button onClick={()=> handleFilter(true)}>Show Finished</button>
            <button onClick={()=> handleFilter(false)}>Show Unfinished</button>
            <button onClick={()=> handleFilter(null)}>Show All</button>

            {/* conditional rendering */}
            {!isfiltered ? taskList.map((task) => (
                <div key={task.id}>
                    <h1>{task.description}</h1>
                    <p>{task.isDone?"finished": "unfinished"}</p>
                    <button onClick={() => handleRemove(task.id)}>Delete</button>
                </div>
            )) : tasks.map((task) => (
                <div key={task.id}>
                    <h1>{task.description}</h1>
                    <p>{task.isDone?"finished": "unfinished"}</p>
                    <button onClick={() => handleRemove(task.id)}>Delete</button>
                </div>
            ))}

            {/* <button onClick={() => handleEdit(task.id, 'New Description')}>Edit</button> */}
            <br />
            <button onClick={handleRemoveAll}>Delete All</button>
        </>
    )
}

export default ListTask