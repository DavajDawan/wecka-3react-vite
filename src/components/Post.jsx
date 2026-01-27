const names = ['Ammar@l2E', 'Johan@edu2Earn']

function Post() {
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    return (
        // return HTML block
        <div>
            <p>{chosenName} say: </p>
            <p>React.js is elegant</p>
        </div>
    )
}

export default Post;