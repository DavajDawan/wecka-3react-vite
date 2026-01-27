import Post from './Post';
import classes from './PostList.module.css'

function PostList() {
    return (
        <ul className={classes.posts}>
            <Post author="Ammar" body="React is great!" />
            <Post author="Johan" body="NO I like Vue more!" />
            <Post author="Kalle" body="Yes React more elegant!" />
        </ul>

    );
}

export default PostList;