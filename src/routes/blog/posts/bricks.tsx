import { JSX } from "solid-js/jsx-runtime";

import styles from "./bricks.module.css";

interface DefaultProps {
    children:JSX.Element
}

export function Notation({children}:DefaultProps) {
    return <h4 class={styles.Notation}><pre>{children}</pre></h4>
}

export function Title({children}:DefaultProps) {
    return <h1 class={styles.Title}><pre>{children}</pre></h1>
}


export function SubTitle({children}:DefaultProps) {
    return <h2 class={styles.SubTitle}><pre>{children}</pre></h2>
}


export function Kicker({children}:DefaultProps) {
    return <h3 class={styles.Kicker}><pre>{children}</pre></h3>
}

export function Text({children}:DefaultProps) {
    return <p class={styles.Text}>{children}</p>
}

export function Highlight({children}:DefaultProps) {
    return <span class={styles.Highlight}>{children}</span>
}

export function Bold({children}:DefaultProps) {
    return <span class={styles.Bold}>{children}</span>
}

export function Link({children, href}:{children:JSX.Element, href:string}) {
    return <a href={href} class={styles.Link}>{children}</a>
}




export function HorizontalLayout({children, gap}:{children:JSX.Element, gap?:string}) {
    return <div style={{
        gap,
    }} class={styles.HorizontalLayout}>{children}</div>
}

export function VerticalLayout({children, gap}:{children:JSX.Element, gap?:string}) {
    return <div style={{
        gap,
    }} class={styles.VerticalLayout}>{children}</div>
}


export function Image({children, width, height}:{children:JSX.Element, width?:string, height?:string}) {
    return <img class={styles.Image} style={{
        width,
        height
    }} src={children as string} alt="" />
}

export function ImageContainer({children, width, height}:{children:JSX.Element, width?:string, height?:string}) {
    return <div class={styles.ImageContainer} style={{
        "background-image": `url("${children}")`,
        width,
        "min-height": height
    }}></div>
}


export function Split() {
    return <div class={styles.Split}></div>
}


