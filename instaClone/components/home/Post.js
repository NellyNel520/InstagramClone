import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const Post = ({ post }) => {
	return (
		<View style={{ marginBottom: 30 }}>
			{/* thin line between post and stories section */}
			<Divider width={1} orientation="vertical" />
			<PostHeader post={post} />
			<PostImage post={post} />
		</View>
	)
}
const PostImage = ({ post }) => (
	<View style={{ width: '100%', height: 450 }}>
		<Image
			source={{ uri: post.imageUrl }}
			style={{ height: '100%', resizeMode: 'cover' }}
		/>
	</View>
)
const PostHeader = ({ post }) => (
	<View
		style={{
			flexDirection: 'row',
			justifyContent: 'space-between',
			margin: 5,
			alignItems: 'center',
		}}
	>
		{/* left */}
		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
			<Image source={{ uri: post.profilePic }} style={styles.story} />
			<Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>
				{post.user}
			</Text>
		</View>

		<TouchableOpacity>
			<Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
		</TouchableOpacity>
	</View>
)

const styles = StyleSheet.create({
	story: {
		width: 35,
		height: 35,
		borderRadius: 50,
		marginLeft: 6,
		borderWidth: 1.7,
		borderColor: '#ff8501',
	},
})
export default Post
