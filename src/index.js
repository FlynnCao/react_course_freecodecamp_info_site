import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './logo.svg';



// const root = ReactDOM.createRoot(document.getElementById('root'));
const navBar = (
	<nav>
		<img src={logo} alt="logo" width={100} height={100} />
		<h1>Fun facts about React</h1>
		<ul>
			<li>Was first realeased in 2013</li>
			<li>Was originally created By Jordan Walke</li>
			<li>Was well over 100k starts on Github</li>
			<li>Is matained by Facebook</li>
			<li>Powers thousands of enterprise apps, including mobile apps</li>
		</ul>
	</nav>
)




ReactDOM.render(navBar,
	document.getElementById('root'))


//react18 usage
// root.render(
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
