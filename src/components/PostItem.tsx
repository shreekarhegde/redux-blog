import React from 'react'
import { Post } from './PostsSlice'

const PostItem = (props: Post) => {
	return (
		<li key={props.id}>
			<h3>
				{props.title}	
			</h3>
			<p>
				{props.text}
			</p>
		</li>
	)
}

export default PostItem
