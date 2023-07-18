import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({navigation}) => {
	return (
		<View style={styles.container}>
    {/* IG text logo */}
			<TouchableOpacity>
				<Image
					style={styles.logo}
					source={require('../../assets/ig-logo.png')}
				/>
			</TouchableOpacity>

			<View style={styles.iconsContainer}>
          {/* Add icon */}
				<TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
					<Image
						style={styles.icon}
						source={{uri: 'https://img.icons8.com/ios/50/ffffff/plus-2-math.png'}}
					/>
				</TouchableOpacity>
          {/* heart icon */}
				<TouchableOpacity>
					<Image
						style={styles.icon}
						source={require('../../assets/icons/heart-icon.png')}
					/>
				</TouchableOpacity>

        {/* messenger icon */}
				<TouchableOpacity>
					<View style={styles.unreadBadge}>
            <Text style={styles.undreadBadgeText}>14</Text>
          </View>
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
		marginLeft: 14,
		resizeMode: 'contain',
	},
	logo: {
		width: 100,
		height: 50,
		resizeMode: 'contain',
	},
  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  undreadBadgeText: {
    color: 'white',
    fontWeight: '600',
  }
})

export default Header
