import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Image
					style={styles.logo}
					source={require('../../assets/ig-logo.png')}
				/>
			</TouchableOpacity>

			<View style={styles.iconsContainer}>
				<TouchableOpacity>
					<Image
						style={styles.icon}
						source={require('../../assets/icons/add-icon.png')}
					/>
				</TouchableOpacity>
        <TouchableOpacity>
					<Image
						style={styles.icon}
						source={require('../../assets/icons/heart-icon.png')}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						style={styles.icon}
						source={require('../../assets/icons/messenger-icon.png')}
					/>
				</TouchableOpacity>
				
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 20,
	},
	iconsContainer: {
		flexDirection: 'row',
	},
	icon: {
		width: 30,
		height: 30,
		marginLeft: 10,
		resizeMode: 'contain',
	},
	logo: {
		width: 100,
		height: 50,
		resizeMode: 'contain',
	},
})

export default Header
