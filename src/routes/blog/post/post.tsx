import styles from "./post.module.css"

import { Posts } from "../posts/posts"

type ValueOf<T> = T extends any[] ? T[number] : T[keyof T]
type Props = ValueOf<Posts>

export default ({title, description, blog}:Props) => {
    return <div class={styles.content}>
        <div style={styles.blog} id={btoa(title)}>
            {blog}
        </div>
    </div>
}