import * as React from 'react';
import PodcastAppBar from './components/AppBar';
import HomePage from './components/HomePage/HomePage';

function App() {
	return (
		<>
			<PodcastAppBar />
			<HomePage />
			<div>This is a little div for you</div>
		</>
	);
}

export default App;
