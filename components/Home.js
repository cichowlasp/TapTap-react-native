import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Home = () => {
	return (
		<>
			<View style={styles.wrapper}>
				<View style={styles.textWrapper}>
					<Text style={styles.TapTap}>TapTap!</Text>
				</View>
				<View style={styles.optionChooseWrapper}>
					<Text style={styles.optionChoose}>Play alone</Text>
					<Text style={styles.optionChoose}>Play with friend</Text>
				</View>
				<View style={styles.footerWrapper}>
					<Text style={styles.footer}>Made by Piotr Cichowlas</Text>
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
		backgroundColor: 'red',
		justifyContent: 'space-between',
	},
	textWrapper: {},
	TapTap: {
		fontSize: 90,
		paddingTop: 80,
		alignSelf: 'center',
	},
	footerWrapper: {
		width: '100%',
	},
	footer: {
		alignSelf: 'center',
		fontSize: 15,
		paddingBottom: 35,
	},
	optionChoose: {
		color: 'white',
		fontSize: 40,
		alignSelf: 'center',
	},
	optionChooseWrapper: {
		paddingBottom: 100,
	},
});

export default Home;
