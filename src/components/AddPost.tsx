import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPost } from './PostsSlice';

const AddPost = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState('');
	const [title, setTitle] = useState('');


	const submitHadler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(addPost({id: Math.random().toString(), text, title}));
		setTitle('')
		setText('')
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

export default AddPost
