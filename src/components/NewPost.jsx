import classes from './NewPost.module.css';

function NewPost() {
    // To get changes in our text area html element
    // using react framework we need to add
    // in related element html code React catcher of changes
    // onChange , and in {} , we call function that
    // has js code reflect what we shall do once we catch this change
    // Ps. it is almost a standard to name this function based on 
    // case we manage , as in our example changeBodyHandler
    // can clearly explain it self as handler to change event of our
    // text area id assigned body into our code below
    let enteredBody = '';
    function changeBodyHandler(event) {
        //console.log(event.target.value);
        enteredBody = event.target.value;
        console.log("enteredBody" + enteredBody);
    }
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text / Body </label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler} />
            </p>
            <p>{enteredBody}</p>
            <p>
                <label htmlFor="name">Your name /Author name</label>
                <input type="text" id="name" required />
            </p>
        </form>
    );

}
export default NewPost