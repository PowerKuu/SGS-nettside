import { JSX } from "solid-js/jsx-runtime"
import styles from "../styles/navbar.module.css"

export default ({icon, children}:{icon:any, children:JSX.Element}) => {
    return <nav class={styles.navbar}>
        <div>
            <img class={styles.icon} src={icon} alt="" />
        </div>
        <div>
            {children}
        </div>
    </nav>
}

export const NavItem = ({button, children}:{button?:boolean, children:JSX.Element}) => {
    const buttonClass = button ? styles.button : ""
    return <p class={`${styles.item} ${buttonClass}`}>{children}</p>
}