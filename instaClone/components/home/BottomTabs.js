import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
} from 'react-native'
import { useState } from 'react'
import React from 'react'
import { Divider } from 'react-native-elements'



export const bottomTabIcons = [
	{
		name: 'Home',
		active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png',
		inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
	},
	{
		name: 'Search',
		active: 'https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-search-alignment-and-tools-kiranshastry-solid-kiranshastry.png',
		inactive: 'https://img.icons8.com/ios-filled/50/ffffff/search--v1.png',
	},
	{
		name: 'Add',
		active: 'https://img.icons8.com/ios-filled/50/ffffff/plus-2-math.png',
		inactive: 'https://img.icons8.com/ios/50/ffffff/plus-2-math.png',
	},
	{
		name: 'Reels',
		active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
		inactive: 'https://img.icons8.com/ios/50/ffffff/instagram-reel.png',
	},
	{
		name: 'Profile',
		active: 'https://images.unsplash.com/photo-1577806934037-32d94e326e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWQlMjBzaG90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
		inactive: 'https://images.unsplash.com/photo-1577806934037-32d94e326e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWQlMjBzaG90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
	},
	
]

const BottomTabs = ({ icons }) => {
	const [activeTab, setActiveTab] = useState('Home')

	const Icon = ({ icon }) => (
		<TouchableOpacity onPress={() => setActiveTab(icon.name)}>
			{/* <Image source={icon.inactive} style={styles.icon} /> */}
			<Image source={{uri: activeTab === icon.name ? icon.active : icon.inactive}} 
			style={styles.icon} />
		</TouchableOpacity>
	)

	
	

	return (
		<View style={styles.wrapper}>
			<Divider  width={1} orientation='vertical' />
			<View style={styles.container}>
				{icons.map((icon, index) => (
					<Icon key={index} icon={icon} />
				))}			
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		width: '100%',
		bottom: '3%',
		zIndex: 999,
		backgroundColor: '#000000'
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		height: 50,
		paddingTop: 10,
	},
	icon: {
		width: 30,
		height: 30,
		// marginHorizontal: 15,
	},
	profilePic: {
		borderRadius: 50,
		borderColor: 'white',
	}
})

export default BottomTabs
