import styles from "./whyus.module.css"
import buttons from "../../styles/buttons.module.css"

import whyusImage from "../../assets/images/whyus.png"

export default () => {
    return <div class={styles.whyus}>
            <h2><span>Hvorfor</span> oss</h2>
            <div class={styles.info}>
                <div class={styles.text}>
                    <p> Neque porro quisquam est, qui dolorem.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.tatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                    <div class={styles.seperator}></div>
                    <p class={buttons.read}>Om oss</p>
                </div>
                
                <div style={{"background-image": `url(${whyusImage})`}} class={styles.image}>
                </div>
            </div>
    </div>
}