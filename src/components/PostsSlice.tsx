import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Post{
  text: string,
  id: string,
  title: string
}

export interface Posts {
	posts: Post[]
}

const initialState: Posts = {
  posts: [{id: '1', text: 'post 1', title: 'title 1'},{title: 'title 2',id: '2', text: 'post 2'}],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
		state.posts.push(action.payload)
    },
	editPost: (state, action: PayloadAction<Post>) => {
		console.log('action.payload.id',action.payload.id)
		state.posts = state.posts.filter(post => post.id !== action.payload.id)
		console.log(state.posts);
		state.posts.push(action.payload)
    },
	// getByID: (state, action: PayloadAction<string>): Post[] => {
	// 	const post = state.posts.filter(post => post.id === action.payload);
	// 	return post
	// },
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(post => post.id !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPost, deletePost, editPost } = postsSlice.actions

export default postsSlice.reducer