//const  names = ['Ammar@l2E' , 'Johan@edu2Earn']

function Post(props) {
    //const chosenName = Math.random() >0.5 ?names[0] : names[1];
    return (
        // return HTML block
        <div>
            <p>{props.author} say: </p>
            <p>{props.body}</p>
        </div>
    )
}

export default Post;