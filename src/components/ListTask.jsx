import { useSelector } from 'react-redux'

const ListTask = () => {
    const tasks = useSelector(state => state.tasks)

    return (
        <>
            {tasks.map((task) => (
                <div key={(task.id)}>
                    <h1>{task.description}</h1>
                    <p>{task.isDone}</p>
                </div>

            ))}
        </>
    )
}

export default ListTask