import { ActionButton } from "../../components/buttons/buttons"
import { homeNav } from "../../navigator"

import styles from "./404.module.css"

export default () => {
    return <div class={styles.content}>
        <h1>404</h1>
        <h3>{`Vi fant ikke siden :(`}</h3>
        
        <ActionButton onclick={() => homeNav(false)}>Hjem</ActionButton>
    </div>
}
