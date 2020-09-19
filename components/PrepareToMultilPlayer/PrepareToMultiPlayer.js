import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { set } from 'react-native-reanimated';
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
			}, 1200);
		}
		if (countDown) {
			if (!time && time !== 'GO!') {
				setTimeout(() => {
					setCountDown(false);
					Actions.playWithFriend();
				}, 700);
			}
		}
	}, [time, countDown]);

	return (
		<>
			<View style={styles.wrapper}>
				<Text style={styles.time}>{time}</Text>
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
