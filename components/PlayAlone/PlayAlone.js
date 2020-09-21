import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

const PlayAlone = () => {
	const [score, setScore] = useState(0);
	const [text, setText] = useState('');
	const updateScore = () => setScore(score + 1);
	const exit = () => Actions.home();
	useEffect(() => {
		if (score == 50) {
			setText('Keep going!');
		}

		if (score == 69) {
			setText('Nice!');
		}

		if (score == 88) {
			setText('HH');
		}

		if (score == 100) {
			setText('Are you bored?');
		}

		if (score == 104) {
			setText('JD');
		}

		if (score == 150) {
			setText('Can you score 1000?');
		}

		if (score == 420) {
			setText('Go green :P');
		}

		if (score == 666) {
			setText('Satan?');
		}

		if (score == 667) {
			setText('Have you seen text on 666?');
		}

		if (score == 777) {
			setText('Heaven?');
		}

		if (score == 778) {
			setText('Have you seen text on 777?');
		}

		if (score == 1000) {
			setText('Really are you still tapping?!');
		}

		if (score == 1200) {
			setText('I will tell you something... ');
		}

		if (score == 1300) {
			setText('if u socore 10000.');
		}

		if (score == 2137) {
			setText('JP2GMD');
		}

		if (score == 10000) {
			setText('You are crazy :P');
		}
	});
	return (
		<>
			<View style={styles.wrapper}>
				<View>
					<Text allowFontScaling={false} style={styles.scoreText}>
						SCORE
					</Text>
					<Text allowFontScaling={false} style={styles.score}>
						{score}
					</Text>
				</View>
				<View>
					<Text allowFontScaling={false} style={styles.text}>
						{text}
					</Text>
				</View>
				<View>
					<TouchableOpacity onPress={exit}>
						<Text allowFontScaling={false} style={styles.exit}>
							EXIT
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonWrapper}>
					<TouchableOpacity
						style={styles.button}
						onPressIn={updateScore}>
						<View style={styles.blueCircle}>
							<Text allowFontScaling={false} style={styles.Tap}>
								Tap!
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		width: '100%',
		height: '100%',
		paddingTop: 60,
		paddingBottom: 60,
		backgroundColor: 'red',
		alignContent: 'center',
		justifyContent: 'space-between',
	},
	buttonWrapper: {
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
	score: {
		alignSelf: 'center',
		fontSize: 100,
		color: 'white',
	},
	exit: {
		alignSelf: 'center',
		fontSize: 30,
		color: 'white',
	},
	text: {
		alignSelf: 'center',
		fontSize: 40,
		color: 'white',
		fontWeight: '500',
	},
	scoreText: {
		alignSelf: 'center',
		fontSize: 50,
		color: 'white',
	},
});

export default PlayAlone;
