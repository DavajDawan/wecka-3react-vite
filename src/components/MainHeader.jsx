import { MdPostAdd, MdMessage } from 'react-icons/md'
import classes from './MainHeader.module.css'
export default function MainHeader({ onCreatePost }) {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage />
                L2E React Post Creator
            </h1>
            <p>
                <button className={classes.button} onClick={onCreatePost}>
                    <MdPostAdd />
                    Create Post
                </button>
            </p >
        </header >
    )
}