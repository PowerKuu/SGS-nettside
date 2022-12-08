import styles from "./solutions.module.css"
import buttons from "../../styles/buttons.module.css"

import Solution from "../../components/solution/solution"

export default () => {
    return <div class={styles.solutions}>
        <h2><span>Våre</span> løsninger</h2>

        <div>
            <Solution heading="Nettside bygging"subheading="responsivt">
                <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>                
            </Solution>

            <Solution heading="Markedsføring"subheading="effektivt">
                <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>                
            </Solution>

            <Solution heading="Web design"subheading="kreativt">
            <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>                
            <p style="margin-top: 1rem;" class={buttons.read}>Lær mer</p>
            </Solution>

            <Solution heading="Analyse" subheading="objektivt">
                <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>                
                <p style="margin-top: 1rem;" class={buttons.read}>Lær mer</p>
            </Solution> 
        </div>
    </div>
}