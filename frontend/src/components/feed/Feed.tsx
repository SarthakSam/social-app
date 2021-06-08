import { NewPost } from '../../features/posts/new-post/NewPost';
import { Posts } from '../../features/posts/Posts';
import styles from './Feed.module.css';

export function Feed() {
    return (
    <div className={ `row col-10 m-0 p-0 ${styles.feed}` }>
        <div className="col-8 m-0 p-0">

            <NewPost />
            <hr />
            <Posts />
        </div>
    </div>
    );
}