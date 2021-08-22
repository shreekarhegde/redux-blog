import { RootState } from '../store'
import { useSelector } from 'react-redux'
import PostItem from './PostItem'
import { Post } from './PostsSlice'

const PostList = () => {
	const posts = useSelector((state: RootState) => state.posts.posts)
	return (
		<ul>
			{
				posts.map((post: Post) => <PostItem key={post.id} id={post.id} text={post.text} title={post.title}/>)
			}
		</ul>
	)
}

export default PostList
