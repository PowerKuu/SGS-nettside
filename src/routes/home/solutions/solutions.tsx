import styles from "./solutions.module.css"
import { ReadButton } from "../../../components/buttons/buttons"

import Solution from "../solution/solution"
import { whyusNav } from "../../../navigator"

export default () => {
    return <div class={styles.solutions}>
        <h2><span>Våre</span> løsninger</h2>

        <div>
            <Solution heading="Web utvikling"subheading="responsivt">
                <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>                
            </Solution>

            <Solution heading="Markedsføring"subheading="effektivt">
                <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>                
            </Solution>

            <Solution heading="Web design"subheading="kreativt">
                <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>                
                <ReadButton style="margin-top: 1rem;" onclick={whyusNav}>Lær mer</ReadButton>
            </Solution>

            <Solution heading="Analyse" subheading="objektivt">
                <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>                
                <ReadButton style="margin-top: 1rem;" onclick={whyusNav}>Lær mer</ReadButton>
            </Solution> 
        </div>
    </div>
}