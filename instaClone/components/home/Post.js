import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const postFooterIcons = [
	{
		name: 'Like',
		imageUrl: 'https://img.icons8.com/small/16/000000/like--v1.png',
		likedImageUrl: 'https://img.icons8.com/small/16/000000/filled-like.png',
	},
	{
		name: 'Comment',
		imageUrl: 'https://img.icons8.com/ios/50/000000/speech-bubble--v1.png',
	},
	{
		name: 'Share',
		imageUrl: 'https://img.icons8.com/ios/50/000000/speech-bubble--v1.png',
	},
	{
		name: 'Save',
		imageUrl:
			'https://img.icons8.com/fluency-systems-regular/48/000000/bookmark-ribbon--v1.png',
	},
]

const Post = ({ post }) => {
	return (
		<View style={{ marginBottom: 30 }}>
			{/* thin line between post and stories section */}
			<Divider width={1} orientation="vertical" />
			<PostHeader post={post} />
			<PostImage post={post} />
			<View style={{ marginHorizontal: 2, marginTop: 10 }}>
				<PostFooter />
				<Likes post={post} />
				<Caption post={post} />
				<CommentSection post={post} />
				<Comments post={post}/>
			</View>
		</View>
	)
}
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
const PostImage = ({ post }) => (
	<View style={{ width: '100%', height: 450 }}>
		<Image
			source={{ uri: post.imageUrl }}
			style={{ height: '100%', resizeMode: 'cover' }}
		/>
	</View>
)

const PostFooter = () => (
	// Icons
	<View style={{ flexDirection: 'row' }}>
		<View style={styles.leftFooterIconContainer}>
			<TouchableOpacity>
				<Image
					style={styles.footerIcon}
					source={require('../../assets/icons/heart-icon.png')}
				/>
			</TouchableOpacity>
			<TouchableOpacity>
				<Image
					style={styles.footerIcon}
					source={require('../../assets/icons/comment-icon.png')}
				/>
			</TouchableOpacity>
			<TouchableOpacity>
				<Image
					style={styles.footerIcon}
					source={require('../../assets/icons/share-icon.png')}
				/>
			</TouchableOpacity>
		</View>

		<View style={{ flex: 1, alignItems: 'flex-end' }}>
			<TouchableOpacity>
				<Image
					style={styles.footerIcon}
					source={require('../../assets/icons/save-icon.png')}
				/>
			</TouchableOpacity>
		</View>
	</View>
)

const Likes = ({ post }) => (
	<View style={{ flexDirection: 'row', marginTop: 4 }}>
		<Text style={{ color: 'white', fontWeight: 600 }}>
			{post.likes.toLocaleString('en')} likes
		</Text>
	</View>
)

const Caption = ({ post }) => (
	<View style={{ marginTop: 5 }}>
		<Text style={{ color: 'white' }}>
			<Text style={{ fontWeight: '800' }}>{post.user} </Text>
			<Text>{post.caption}</Text>
		</Text>
	</View>
)

const CommentSection = ({ post }) => (
	<View style={{ marginTop: 5 }}>
		{!!post.comments.length && (
			<Text style={{ color: 'gray', fontWeight: 600 }}>
				View {post.comments.length > 1 ? 'all' : ''}
				{post.comments.length}{' '}
				{post.comments.length > 1 ? 'comments' : 'comment'}
			</Text>
			
		)}
	</View>
)

const Comments = ({post}) => (
	// need to limit comments to the first 2 in backend comment controller 
	<View>
		{post.comments.map((comment, index) => (
			<View key={index} style={{flexDirection: 'row', marginTop: 3}}>
				<Text style={{color: 'white'}}>
					<Text style={{fontWeight: 700}}>{comment.user}</Text>  {comment.comment}
				</Text>
			</View>
		))}
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
	footerIcon: {
		width: 33,
		height: 33,
		marginRight: 6,
	},
	leftFooterIconContainer: {
		flexDirection: 'row',
		width: '32%',
		justifyContent: 'space-between',
	},
})
export default Post
