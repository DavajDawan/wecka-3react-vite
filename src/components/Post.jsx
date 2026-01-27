//const  names = ['Ammar@l2E' , 'Johan@edu2Earn']
import classes from "./Post.module.css";

function Post(props) {
    //const chosenName = Math.random() >0.5 ?names[0] : names[1];
    return (
        // return HTML block
        <li className={classes.post}>
            <p className={classes.author}>{props.author} say: </p>
            <p className={classes.text}>{props.body}</p>
        </li>
    );
}

export default Post;