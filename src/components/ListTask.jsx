import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeAllTask, removeTask } from '../JSX/Action/Action'

const ListTask = () => {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const handleRemove = (taskId) => {
        dispatch(removeTask(taskId))
    }

    const handleRemoveAll = () => {
        dispatch(removeAllTask())
    }

    return (
        <>
            {tasks.map((task) => (
                <div key={(task.id)}>
                    <h1>{task.description}</h1>
                    <p>{task.isDone}</p>
                    <button onClick={() => handleRemove(task.id)}>Delete</button>
                </div>
            ))}
            <button onClick={handleRemoveAll}>Delete All</button>
        </>
    )
}

export default ListTask