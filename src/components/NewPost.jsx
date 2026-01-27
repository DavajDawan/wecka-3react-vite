// userState
// React has its own set to catch changes of our parameters state
// which React sync automatically between ReactDom and WE Browser DOM
// to use this React hook useState we need to import it first
// then set the default value for this state in userState par.
// and catch return into const array object has our parameter and function
// we should use to set the change

//import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({ onBodyChange, onAuthorChange }) {
    // To get changes in our text area html element
    // using react framework we need to add
    // in related element html code React catcher of changes
    // onChange , and in {} , we call function that
    // has js code reflect what we shall do once we catch this change
    // Ps. it is almost a standard to name this function based on 
    // case we manage , as in our example changeBodyHandler
    // can clearly explain it self as handler to change event of our
    // text area id assigned body into our code below

    //let enteredBody ='';
    //const [enteredBody ,setEnteredBody ]= useState('');
    //const [EnteredAuthor , setEnteredAuthor]=useState('');

    /*function changeBodyHandler(event){
        //console.log(event.target.value);
        //enteredBody = event.target.value;
        //console.log("enteredBody" + enteredBody);
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event){
        setEnteredAuthor(event.target.value);
    }*/

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text / Body </label>
                <textarea id="body" required rows={3} onChange={onBodyChange} />
            </p>

            <p>
                <label htmlFor="name">Your name /Author name</label>
                <input type="text" id="name" required onChange={onAuthorChange} />
            </p>

        </form>
    );

}
export default NewPost