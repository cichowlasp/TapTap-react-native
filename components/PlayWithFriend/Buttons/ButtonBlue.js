import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonBlue = ({ onPressBlue, blueScore, disableButton }) => {
	return (
		<View style={styles.blueWrapper}>
			<Text style={styles.score}>{blueScore}</Text>
			<View style={styles.blueButtonWrapper}>
				<View
					disabled={disableButton}
					onTouchStart={onPressBlue}
					style={styles.blueButton}>
					<View style={styles.redCircle}>
						<Text style={styles.Tap}>Tap!</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		backgroundColor: 'red',
	},
	redWrapper: {
		display: 'flex',
		flexDirection: 'row',
		height: '50%',
		backgroundColor: 'red',
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		transform: [{ rotate: '180deg' }],
	},
	blueWrapper: {
		height: '50%',
		backgroundColor: 'blue',
		justifyContent: 'center',
		alignItems: 'center',
	},
	exit: {
		alignSelf: 'center',
		fontSize: 30,
		color: 'white',
	},
	exitButton: {
		position: 'relative',
		alignSelf: 'center',
		zIndex: 2,
		top: '52%',
	},
	redButtonWrapper: {
		alignItems: 'center',
		textAlign: 'center',
	},
	button: {
		height: 200,
		width: 200,
		borderRadius: 200 / 2,
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center',
	},
	blueCircle: {
		height: 150,
		width: 150,
		borderRadius: 150 / 2,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
	Tap: {
		fontSize: 60,
		color: 'white',
		alignSelf: 'center',
	},

	blueButtonWrapper: {
		alignItems: 'center',
		textAlign: 'center',
	},
	blueButton: {
		height: 200,
		width: 200,
		borderRadius: 200 / 2,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
	redCircle: {
		height: 150,
		width: 150,
		borderRadius: 150 / 2,
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center',
	},
	score: {
		position: 'absolute',
		fontSize: 30,
		color: 'white',
		zIndex: 2,
		top: 0,
		right: '5%',
	},
});

export default ButtonBlue;
