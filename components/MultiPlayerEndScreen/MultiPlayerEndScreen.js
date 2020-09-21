import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { Actions } from 'react-native-router-flux';

const MultiPlayerEndScreen = ({ color }) => {
	const exit = () => Actions.home();
	return (
		<>
			<View
				style={{
					display: 'flex',
					width: '100%',
					height: '100%',
					backgroundColor: color,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<View>
					<Text style={styles.Text}>{color} player won</Text>
				</View>
				<TouchableOpacity style={styles.exitButton} onPressIn={exit}>
					<Text style={styles.exit}>EXIT</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	Text: {
		color: 'black',
		fontSize: 40,
		fontWeight: '500',
		alignSelf: 'center',
		textTransform: 'uppercase',
	},
	exit: {
		paddingTop: '10%',
		alignSelf: 'center',
		fontSize: 30,
		color: 'white',
	},
});

export default MultiPlayerEndScreen;
