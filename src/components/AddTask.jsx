import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../store/Action/Action.js'

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