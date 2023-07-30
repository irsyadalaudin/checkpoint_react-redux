import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../JSX/Action/Action'

const AddTask = () => {
    const [description, setDescription] = useState('')
    const [isDone, setIsDone] = useState(false)
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.list)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(tasks);

        if (tasks.some(task => task.description === description)) {
            alert('Task already exist !')
            return
        }

        const newDescription = {
            id: Date.now(),
            description,
            isDone
        }
        setDescription('')
        setIsDone(false)

        dispatch(addTask(newDescription))
        console.log(newDescription)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleIsDone = (e) => {
        if (e.target.checked) {
            setIsDone(true)
        } else {
            setIsDone(false)
        }
    }

    return (
        <div className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input type='text' value={description} onChange={handleDescription} />
                </div>

                <div>
                    <label htmlFor='isDone'>is done</label>
                    <input type='checkbox' onChange={handleIsDone} />
                </div>

                <div>
                    <input type='submit' value='add'/>
                </div>
            </form>
        </div>
    )
}

export default AddTask