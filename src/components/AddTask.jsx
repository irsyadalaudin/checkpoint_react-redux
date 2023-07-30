import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../store/Action/Action.js'

const AddTask = () => {
    const [description, setDescription] = useState('')
    const [isDone, setIsDone] = useState(false)

    // REDUX HOOKS
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.list)

    // HANDLING FORM SUBMISSION
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(tasks);

        // Checking if the task description already exists in the tasks list.
        if (tasks.some(task => task.description === description)) {
            alert('Task already exist !')
            return
        }

        // Creating a new task object with the entered data.
        const newDescription = {
            id: Date.now(),
            description,
            isDone
        }

        // Resetting the form fields after form submission.
        setDescription('')
        setIsDone(false)

        // Dispatching the 'addTask' action with the new task object to add it to the Redux store.
        dispatch(addTask(newDescription))
        console.log(newDescription)        // Logging the new task object to the console for debugging.
    }

    // HANDLING CHANGES IN THE DESCRIPTION FIELD
    const handleDescription = (e) => {
        setDescription(e.target.value)     // Updating the 'description' state with the entered value.
    }

    // HANDLING CHANGES IN THE ISDONE CHECKBOX
    const handleIsDone = (e) => {
        if (e.target.checked) {            // Updating the 'isDone' state based on the checkbox value.
            setIsDone(true)                // If the checkbox is checked, the 'isDone' state will be true.
        } else {
            setIsDone(false)               // If the checkbox is not checked, the 'isDone' state will be false.
        }
    }

    // RENDERING THE COMPONENT
    return (
        <div className='d-flex justify-content-center sticky-top' style={{top: '0'}}>
            <div className='bg-success-subtle w-75 input-group d-flex justify-content-center pt-4'>
                <form className='form-label' onSubmit={handleSubmit}>
                    <div>
                        <label className='form-label' htmlFor='description'>Description</label>
                        <input className='form-control' type='text' value={description} onChange={handleDescription} />
                    </div>
                    <div>
                        <label className='form-label' htmlFor='isDone'>is done</label>
                        <input className='form-check-input bg-success' type='checkbox' onChange={handleIsDone} />
                    </div>
                    <div>
                        <button className='btn btn-success'type='submit'>add</button>
                    </div>
            </form>
        </div>
        </div>
    )
}

export default AddTask