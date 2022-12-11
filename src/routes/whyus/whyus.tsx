import Simulation from "./simulation/simulation"
import Solutions from "./solutions/solutions"

import styles from "./whyus.module.css"

export default () => {
    return <div class={styles.content}>
        <Solutions></Solutions>
    </div>
}