import styles from "./blog.module.css"
import Post from "./post/post"
import { posts } from "./posts/posts"

export default () => {
    return <div class={styles.content}>
        {posts.map((value) => <Post {...value}></Post>)}
    </div>
}