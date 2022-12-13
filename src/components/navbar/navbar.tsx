import { JSX } from "solid-js/jsx-runtime"
import styles from "./navbar.module.css"

import { ReadButton } from "../buttons/buttons"

export default ({icon, iconOnClick, children}:{icon:any, iconOnClick:() => any, children:JSX.Element}) => {
    return <nav class={styles.navbar}>
        <div class={styles.iconContainer}>
            <img onclick={iconOnClick} class={styles.icon} src={icon} alt="SGS markedsføring ikon" />
        </div>
        <div>
            {children}
        </div>
    </nav>
}

export const NavItem = ({button, onclick, children}:{button?:boolean, onclick?:() => any, children:JSX.Element}) => {
    const childrernWrapped = button ? <ReadButton>{children}</ReadButton> : children
    return <p onclick={onclick} class={styles.item}>{childrernWrapped}</p>
}