import React from 'react';
import {} from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Home from '../Home/Home';
import PlayAlone from '../PlayAlone/PlayAlone';
import PlayWithFriend from '../PlayWithFriend/PlayWithFriend';
import PrepareToMultiPlayer from '../PrepareToMultilPlayer/PrepareToMultiPlayer';
import MultiPlayerEndScreen from '../MultiPlayerEndScreen/MultiPlayerEndScreen';

const Routs = () => {
	return (
		<Router>
			<Stack
				key='root'
				style={{ backgroundColor: 'red' }}
				hideNavBar={true}>
				<Scene key='home' component={Home} initial />
				<Scene key='playAlone' component={PlayAlone} />
				<Scene
					key='prepareToMultiPlayer'
					component={PrepareToMultiPlayer}
				/>
				<Scene key='playWithFriend' component={PlayWithFriend} />
				<Scene
					key='multiPlayerEndScreen'
					component={MultiPlayerEndScreen}
				/>
			</Stack>
		</Router>
	);
};

export default Routs;
