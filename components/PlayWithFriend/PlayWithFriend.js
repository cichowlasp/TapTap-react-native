import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const PlayWithFriend = () => {
	const [redScore, setRedScore] = useState(10);
	const [blueScore, setBlueScore] = useState(10);
	const [disableButton, setDisableButton] = useState(false);

	const exit = () => Actions.home();
	const onPressRed = () => setRedScore(redScore - 1);
	const onPressBlue = () => setBlueScore(blueScore - 1);

	useEffect(() => {
		if (blueScore === 0 || redScore === 0) {
			setDisableButton(true);
		}
		if (blueScore === 0) {
			Actions.multiPlayerEndScreen({ color: 'blue' });
		}
		if (redScore === 0) {
			Actions.multiPlayerEndScreen({ color: 'red' });
		}
	}, [blueScore, redScore]);
	return (
		<>
			<View style={styles.wrapper}>
				<TouchableHighlight style={styles.exitButton} onPress={exit}>
					<Text style={styles.exit}>EXIT</Text>
				</TouchableHighlight>
				<View style={styles.backgroundWrapper}>
					<View style={styles.redWrapper}>
						<Text style={styles.score}>{redScore}</Text>
						<View style={styles.redButtonWrapper}>
							<View
								pointerEvents={disableButton ? 'none' : 'auto'}
								onTouchStart={onPressRed}
								style={styles.button}>
								<View style={styles.blueCircle}>
									<Text style={styles.Tap}>Tap!</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.blueWrapper}>
						<Text style={styles.score}>{blueScore}</Text>
						<View style={styles.blueButtonWrapper}>
							<View
								pointerEvents={disableButton ? 'none' : 'auto'}
								onTouchStart={onPressBlue}
								style={styles.blueButton}>
								<View style={styles.redCircle}>
									<Text style={styles.Tap}>Tap!</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		</>
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

export default PlayWithFriend;
