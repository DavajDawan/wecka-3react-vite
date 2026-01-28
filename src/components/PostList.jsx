// To get our enteredAuthor adn enteredBody into our postList elements
// we nned to restructure our useState to move it to father component PostList
// from child component newPost.
// this we call state lifting.
// to do this : 
// 1- import useState in Father
// 2- configure the state(s) into Father as in child
// 3- wire father with child using props 

import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css'
import { useState } from 'react';
import Modal from './Modal';

function PostList({ isPosting, onStopPosting }) {
    // Lift useState- We move them to newPost
    /* const [enteredBody, setEnteredBody] = useState('');
    const [EnteredAuthor, setEnteredAuthor] = useState(''); */

    // To control Modal we to lift it to App.jsx after adding MainHeader
    //const [modalIsVisible, setModalIsVisible] = useState(true);
    //lift handler(s) of useState
    /*    function changeBodyHandler(event) {
           setEnteredBody(event.target.value);
       }
       function changeAuthorHandler(event) {
           setEnteredAuthor(event.target.value);
       } */

    //lift with useState
    /*  function hideModalHandler() {
         setModalIsVisible(false);
     } */
    // To control our Modal we can use 2 different set
    // old Fashion
    /*let modalContent;
    if(modalIsVisible){
        modalContent=(
            <Modal onClose={hideModalHandler}>
            <NewPost onBodyChange={changeBodyHandler}
                    onAuthorChange={changeAuthorHandler}/>
        </Modal>
        );
    }*/
    return (
        // Let's wire these states with child
        <>

            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} />
                </Modal>
            )}
            <ul className={classes.posts}>
                {/* <Post author={EnteredAuthor} body={enteredBody} />
                <Post author={EnteredAuthor} body={enteredBody} />
                <Post author={EnteredAuthor} body={enteredBody} /> */}

            </ul>
        </>

    );
}

export default PostList;