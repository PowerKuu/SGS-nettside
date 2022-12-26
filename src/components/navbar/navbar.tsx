import { JSX } from "solid-js/jsx-runtime"
import styles from "./navbar.module.css"

import { ReadButton } from "../buttons/buttons"
import { createSignal } from "solid-js"

interface Dropdown {
    text: string,
    onclick: () => any,
    active: boolean
}

export default ({icon, iconOnClick, dropdowns, children}:{icon:any, iconOnClick:() => any, dropdowns:Dropdown[], children:JSX.Element}) => {
    const [getOpenClass, setOpenClass] = createSignal("")

    const toggleHamburger = () => {
        if (getOpenClass() == styles.open) {
            setOpenClass("")
        } else {
            setOpenClass(styles.open)
        }
    }

    return <nav class={styles.navbar}>
        <div class={styles.iconContainer}>
            <img onclick={iconOnClick} class={styles.icon} src={icon} alt="SGS markedsføring ikon" />
        </div>
        <div class={styles.menuList}>
            {children}
        </div>

        <div class={[styles.menuToggle, getOpenClass()].join(" ")} onclick={toggleHamburger}>
            <div class={styles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class={styles.cross}>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class={styles.dropdown}>
            {dropdowns.map((dropdown, index) => {
                return <p onclick={() => {
                    toggleHamburger()
                    dropdown.onclick()
                }} class={[styles.dropdownItem, dropdown.active ? styles.active : ""].join(" ")} style={{
                    "transition-delay": (index * 0.05) + "s"
                }}>{dropdown.text}</p>
            })}
        </div>
    </nav>
}

export const NavItem = ({button, active, onclick, children}:{button?:boolean, active:boolean, onclick?:() => any, children:JSX.Element}) => {
    const childrernWrapped = button ? <ReadButton>{children}</ReadButton> : children
    return <p onclick={onclick} class={[active ? styles.active : ""].join(" ")}>
        {childrernWrapped}
    </p>
}