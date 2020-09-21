import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
	const goToPlayAlone = () => Actions.playAlone();
	const goToPrepareToMultiPlayer = () => Actions.prepareToMultiPlayer();

	return (
		<>
			<View style={styles.wrapper}>
				<View style={styles.textWrapper}>
					<Text style={styles.TapTap}>TapTap!</Text>
				</View>
				<View style={styles.optionChooseWrapper}>
					<TouchableOpacity onPress={goToPlayAlone}>
						<Text style={styles.optionChoose}>Play alone</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={goToPrepareToMultiPlayer}>
						<Text style={styles.optionChoose}>
							Play with friend
						</Text>
					</TouchableOpacity>
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
