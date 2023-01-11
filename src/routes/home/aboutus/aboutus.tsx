import styles from "./aboutus.module.css"
import {ReadButton} from "../../../components/buttons/buttons"

import aboutusImage from "../../../assets/images/aboutus.png"
import sgsVector from "../../../assets/vectors/sgs-logo.svg"

import { whyusNav } from "../../../navigator"

export default () => {
    return <div class={styles.aboutus}>
            <h2><span>Om</span> oss</h2>
            <div class={styles.info}>
                <div class={styles.text}>
                    <p>Hos SGS marketing er vi et lag av erfarne fagfolk som er dedikert til å tilby toppkvalitets webdesign og markedsføringstjenester til våre kunder i Norge. Vi strever alltid etter å jobbe tett med våre kunder for å forstå deres behov og hjelpe dem med å nå sine mål. Med fokus på innovasjon og kreativitet bruker vi de nyeste verktøyene og teknikkene for å lage fantastiske, effektive nettsider og markedsføringskampanjer som gir resultater.</p>
                    <div class={styles.seperator}></div>
                    <ReadButton onclick={whyusNav}>Hvorfor oss</ReadButton>
                </div>
                
                <div style={{"background-image": `url(${sgsVector})`}} class={styles.image}>
                </div>
            </div>
    </div>
}