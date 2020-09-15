import React from 'react';
import {} from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Home from './components/Home';
const App = () => {
	return (
		<Router>
			<Stack
				key='root'
				style={{ backgroundColor: 'red' }}
				hideNavBar={true}>
				<Scene key='home' component={Home} initial />
			</Stack>
		</Router>
	);
};

export default App;
