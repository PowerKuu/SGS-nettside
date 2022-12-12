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
                    <p> Neque porro quisquam est, qui dolorem.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.tatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                    <div class={styles.seperator}></div>
                    <ReadButton onclick={whyusNav}>Hvorfor oss</ReadButton>
                </div>
                
                <div style={{"background-image": `url(${sgsVector})`}} class={styles.image}>
                </div>
            </div>
    </div>
}