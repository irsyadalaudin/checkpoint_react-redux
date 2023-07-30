// IMPORTING REQUIRED MODULES
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from '../src/store/Store.js'

// RENDERING THE APPLICATION TO THE DOM
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>        {/* Using the 'Provider' component to provide the Redux store to the application */}
			<App />
		</Provider>
	</React.StrictMode>
)