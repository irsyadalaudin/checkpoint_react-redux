const Task = (task) => {
    return (
        <div>
            <h1>{task.description}</h1>
            <p>{task.isDone ? 'finished': 'unfinished'}</p>
        </div>
    )
}

export default Task;