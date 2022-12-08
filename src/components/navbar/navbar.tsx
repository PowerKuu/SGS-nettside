import { JSX } from "solid-js/jsx-runtime"
import styles from "./navbar.module.css"

import buttons from "../../styles/buttons.module.css"

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

export const NavItem = ({button, onclick, children}:{button?:boolean, onclick?:() => any, children:JSX.Element}) => {
    const buttonClass = button ? buttons.read : ""
    return <p onclick={onclick} class={`${styles.item} ${buttonClass}`}>{children}</p>
}