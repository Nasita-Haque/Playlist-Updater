import React from 'react';
import ReactDOM from 'react-dom';

//Files
import PlaylistSearcher from './components/PlaylistSearcher.jsx';

class App extends React.Component {
	render(){
		return (
			<PlaylistSearcher />
		)
			
	}
};

ReactDOM.render(<App />, document.getElementById('app'));