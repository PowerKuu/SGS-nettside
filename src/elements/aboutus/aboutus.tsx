import styles from "./aboutus.module.css"
import buttons from "../../styles/buttons.module.css"

import aboutusImage from "../../assets/images/aboutus.png"

export default () => {
    return <div class={styles.aboutus}>
            <h2><span>Om</span> oss</h2>
            <div class={styles.info}>
                <div class={styles.text}>
                    <p> Neque porro quisquam est, qui dolorem.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.tatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                    <div class={styles.seperator}></div>
                    <p class={buttons.read}>Hvorfor oss</p>
                </div>
                
                <div style={{"background-image": `url(${aboutusImage})`}} class={styles.image}>
                </div>
            </div>
    </div>
}