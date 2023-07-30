import './App.css'
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

	return (
		<div className='bg-success bg-gradient rounded-4 my-5' style={{width: '1000px'}}>
			<AddTask />
			<ListTask />
		</div>
	)
}

export default App