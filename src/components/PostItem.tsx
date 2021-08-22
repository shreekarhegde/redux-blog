import React from 'react'
import { Post } from './PostsSlice'
import { useHistory } from 'react-router-dom';

const PostItem = (props: Post) => {

	const history = useHistory();

	const editClickHandler = (e:  React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		history.push('/add-post', {id: props.id, mode: 'edit'})
	}

	return (
		<li key={props.id}>
			<h3>
				{props.title}	
			</h3>
			<p>
				{props.text}
			</p>
			<button onClick={editClickHandler} value={props.id}>Edit</button>
		</li>
	)
}

export default PostItem
