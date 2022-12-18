import { JSX } from "solid-js/jsx-runtime"
import styles from "./footer.module.css"

import leftPillar from "../../assets/vectors/bottom-left-pillar.svg"
import rightPillar from "../../assets/vectors/bottom-right-pillar.svg"

export const FooterElement = ({onclick, children}:{onclick?:() => any, children:JSX.Element}) => {
    return <p class={styles.element} onclick={onclick}>{children}</p>
}

export default ({copywrite, pillars, children}:{copywrite:string, pillars:boolean, children:JSX.Element}) => {
    return <>
        <footer class={styles.footer}>
            <div>
                {children}
            </div>
            <p>{copywrite}</p>
        </footer>
        {
            pillars ? <div class={styles.pillars}>
                <img class={styles.leftPillar} src={leftPillar} alt="Markedsføring pillar design." />
                <img class={styles.rightPillar} src={rightPillar} alt="Markedsføring pillar design." />
            </div> : ""
        }
    </>

}