const Task = (task) => {
    return (
        <div>
            <h1>{task.description}</h1>                        {/* rendering task description which is displayed using an h1 element with the content from task.description */} 
            <p>{task.isDone ? 'finished': 'unfinished'}</p>    {/* rendering task description which is displayed using an p element with the content from task.isDone */}
        </div>
    )
}

export default Task;