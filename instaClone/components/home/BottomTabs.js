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

// Icon PNG files
import home from '../../assets/bottomTab-icons/home-icon-outline.png'
import homeFilled from '../../assets/bottomTab-icons/home-icon-filled.png'
import search from '../../assets/bottomTab-icons/search-icon.png'
import add from '../../assets/bottomTab-icons/add-icon-outline.png'
import addFilled from '../../assets/bottomTab-icons/add-icon-filled.png'
import reels from '../../assets/bottomTab-icons/reels-icon.png'
import reelsFilled from '../../assets/bottomTab-icons/reels-icon-filled.png'

export const bottomTabIcons = [
	{
		name: 'Home',
		active: homeFilled,
		inactive: home,
	},
	{
		name: 'Search',
		active: search,
		inactive: search,
	},
	{
		name: 'Add',
		active: addFilled,
		inactive: add,
	},
	{
		name: 'Reels',
		active: reelsFilled,
		inactive: reels,
	},
]

const profileIcon = [
	{
		name: 'Profile',
		active:
			'https://images.unsplash.com/photo-1577806934037-32d94e326e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWQlMjBzaG90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
		inactive:
			'https://images.unsplash.com/photo-1577806934037-32d94e326e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWQlMjBzaG90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
	},
]
const BottomTabs = ({ icons }) => {
	const [activeTab, setActiveTab] = useState('Home')

	const Icon = ({ icon }) => (
		<TouchableOpacity onPress={() => setActiveTab(icon.name)}>
			{/* <Image source={icon.inactive} style={styles.icon} /> */}
			<Image source={activeTab === icon.name ? icon.active : icon.inactive} 
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
				{/* temp fix needs to show current user profile image */}
				<TouchableOpacity>
					<Image
						source={{
							uri: 'https://images.unsplash.com/photo-1577806934037-32d94e326e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWQlMjBzaG90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
						}}
						style={styles.icon}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {

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
})

export default BottomTabs
