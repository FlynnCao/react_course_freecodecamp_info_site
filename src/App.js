import React from 'react'
import Header from './components/Header';
import TaskList from './components/MainContent';
import Footer from './components/Footer';
import logo from './logo.svg'

function App() {
	return (
		<div>
			<img src={logo} alt="logo" className="bg--icon" />
			<Header />
			<TaskList />
			<Footer />
		</div>
	)
}

export default App;
