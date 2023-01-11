import styles from "./solutions.module.css"
import { ReadButton } from "../../../components/buttons/buttons"

import Solution from "../solution/solution"
import { whyusNav } from "../../../navigator"

export default () => {
    return <div class={styles.solutions}>
        <h2><span>Våre</span> løsninger</h2>

        <div>
            <Solution heading="Web utvikling"subheading="responsivt">
                <p class={styles.text}>Hos SGS marketing tilbyr vi omfattende webutviklingsløsninger for å hjelpe bedrifter med å etablere en sterk online tilstedeværelse. Vårt lag av erfarne designere og utviklere lager tilpassede nettsider som er skreddersydd for de spesifikke behovene og målene til hver enkelt kunde.</p>                
            </Solution>

            <Solution heading="Markedsføring"subheading="effektivt">
                <p class={styles.text}>Vi tilbyr en rekke digitale markedsføringsløsninger for å hjelpe bedrifter med å nå sin målgruppe og sine markedsføringsmål. Vi bruker en kombinasjon av strategier som søkemotoroptimalisering, markedsføring på sosiale medier, e-postmarkedsføring og betal-per-klikk-annonsering for å øke merkekjennskapen og drive trafikk til nettstedet ditt.</p>                
            </Solution>

            <Solution heading="Web design"subheading="kreativt">
                <p class={styles.text}>Vi er stolte av å tilby webdesigntjenester av topp kvalitet for å hjelpe bedrifter med å skille seg ut på nettet. Vårt team av erfarne designere lager fantastiske, moderne nettsteder som er visuelt tiltalende og enkle å navigere.</p>                
                <ReadButton style="margin-top: 1rem;" onclick={whyusNav}>Lær mer</ReadButton>
            </Solution>

            <Solution heading="Analyse" subheading="objektivt">
                <p class={styles.text}>Data og analyser er avgjørende for suksessen til enhver markedsføringskampanje. Derfor tilbyr vi markedsanalyse som en del av vårt omfattende utvalg av digitale markedsføringsløsninger. Vårt team av eksperter bruker avanserte verktøy og teknikker for å spore ytelsen til markedsføringskampanjene dine.</p>                
                <ReadButton style="margin-top: 1rem;" onclick={whyusNav}>Lær mer</ReadButton>
            </Solution> 
        </div>
    </div>
}