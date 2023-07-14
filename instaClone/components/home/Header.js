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
        <Text style={{ color: 'white' }}>Dummy </Text>
        <Text style={{ color: 'white' }}>Dummy </Text>
        <Text style={{ color: 'white' }}>Dummy </Text>
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
	logo: {
		width: 100,
		height: 50,
		resizeMode: 'contain',
	},
})

export default Header
