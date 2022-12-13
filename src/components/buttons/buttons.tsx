import { JSX } from "solid-js/jsx-runtime"
import styles from "./buttons.module.css"

interface buttonProps {
    children:JSX.Element
    onclick?: () => any
    style?: string
    class?: string
}

export const ActionButton = (props:buttonProps) => {
    const Class = props.class ?? ""
    return <p onclick={props.onclick} style={props.style} class={[styles.action, Class].join(" ")}>{props.children}</p>
}

export const ReadButton = (props:buttonProps) => {
    const Class = props.class ?? ""
    return <p onclick={props.onclick} style={props.style} class={[styles.read, Class].join(" ")}>{props.children}</p>
}