import { JSX } from "solid-js/jsx-runtime"
import styles from "./solution.module.css"

export default ({heading, subheading, children}:{heading:string, subheading:string, children:JSX.Element}) => {
    return <div class={styles.solution}>
        <h3>{heading} <span>{subheading}</span></h3>
        {children}
    </div>
}