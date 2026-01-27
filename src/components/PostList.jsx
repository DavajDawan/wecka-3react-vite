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
import classes from './PostList.module.css';
import { useState } from 'react';
import Modal from './Modal';

function PostList() {
    // Lift useState
    const [enteredBody, setEnteredBody] = useState('');
    const [EnteredAuthor, setEnteredAuthor] = useState('');
    // To control Modal
    const [modalIsVisible, setModalIsVisible] = useState(true);
    //lift handler(s) of useState
    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }
    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }
    function hideModalHandler() {
        setModalIsVisible(false);
    }
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

            {modalIsVisible && (
                <Modal onClose={hideModalHandler}>
                    <NewPost onBodyChange={changeBodyHandler}
                        onAuthorChange={changeAuthorHandler} />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author={EnteredAuthor} body={enteredBody} />
                <Post author="Johan" body="NO I like Vue more!" />
                <Post author="Kalle" body="Yes React more elegant!" />
            </ul>
        </>

    );
}

export default PostList;