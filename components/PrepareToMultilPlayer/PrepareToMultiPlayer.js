import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const PrepareToMultiPlayer = () => {
	const [time, setTime] = useState(3);
	const [countDown, setCountDown] = useState(true);
	useEffect(() => {
		if (countDown) {
			const t = setInterval(() => {
				setTime(time - 1);
				if (time === 1) {
					setTime('GO!');
				}
			}, 800);
		}
		if (countDown) {
			if (time <= 0 && time !== 'GO!') {
				setTimeout(() => {
					setCountDown(false);
					Actions.playWithFriend();
				}, 400);
			}
		}
	}, [time, countDown]);

	return (
		<>
			<View style={styles.wrapper}>
				<Text allowFontScaling={false} style={styles.time}>
					{time}
				</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		width: '100%',
		height: '100%',
		paddingBottom: '40%',
		paddingTop: '40%',
		backgroundColor: 'red',
		alignContent: 'center',
		justifyContent: 'center',
	},
	time: { alignSelf: 'center', fontSize: 100, color: 'white' },
});

export default PrepareToMultiPlayer;
