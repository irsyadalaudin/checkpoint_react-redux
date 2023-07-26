import { useSelector, useDispatch } from "react-redux"
import { removeTask } from '../JSX/Action/Action'

const RemoveTask = () => {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const handleRemove = (taskId) => {
        dispatch(removeTask(taskId))
    }

    return(
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.description} 
                    <button onClick={() => handleRemove(task.id)}>Remove</button>
                </li>
            ))}
        </ul>
    )
}

export default RemoveTask