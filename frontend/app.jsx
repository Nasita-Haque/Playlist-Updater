import React from 'react';
import ReactDOM from 'react-dom';

//Files
import Login from './login.jsx';

class App extends React.Component {
	render(){
		return (
			<Login />
		)
			
	}
}

ReactDOM.render(<App />, document.getElementById('app'));