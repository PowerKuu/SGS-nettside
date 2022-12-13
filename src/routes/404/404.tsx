import { ActionButton } from "../../components/buttons/buttons"
import { homeNav } from "../../navigator"

import styles from "./404.module.css"

export default () => {
    return <div class={styles.content}>
        <h1><span>404</span> - Not found!</h1>
        <ActionButton onclick={() => homeNav(false)}>Hjem</ActionButton>
    </div>
}
