import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../JSX/Action/Action'

const AddTask = () => {
    const [description, setDescription] = useState('')
    const [isDone, setIsDone] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
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
        <>
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
        </>
    )
}

export default AddTask