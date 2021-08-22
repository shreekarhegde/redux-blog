import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPost, editPost } from './PostsSlice';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { withRouter } from 'react-router';

const AddPost = (props: any) => {
	console.log('props', props);
	const dispatch = useDispatch();
	const [text, setText] = useState('');
	const [title, setTitle] = useState('');
	const history = useHistory();
	const posts = useSelector((state: RootState) => state.posts.posts);

	useEffect(() => {
		const id = props.history.location.state ? props.history.location.state.id: '';
		if(!id) return;
		const currPost = posts.filter(post => post.id === id)[0];
		if(!currPost) return;
		setText(currPost.text);
		setTitle(currPost.title);
	}, [props, posts])

	
	const submitHadler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let id = '';
		if(props.history.location.state){
			id = props.history.location.state.id;
		}
		if(props.history.location.state && props.history.location.state.mode === 'edit'){
			dispatch(editPost({id, text, title}));
		}else{
			dispatch(addPost({id: Math.random().toString(), text, title}));
		}
		setTitle('')
		setText('')
		history.push('/');
	}

	const onTitleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value)
	}

	const onTextChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value)
	}

	return (
		<form onSubmit={submitHadler}>
			<label htmlFor="title" >Title</label>
			<input type="text" id="title" value={title} onChange={onTitleChangeHandler}/>
			<label htmlFor="text">Text</label>
			<input type="text" id="text" value={text} onChange={onTextChangeHandler}/>
			<input type="submit" id="submit"/>
		</form>
	)
}

export default withRouter(AddPost); 
