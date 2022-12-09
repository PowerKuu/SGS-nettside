import styles from "./header.module.css"
import buttons from "../../styles/buttons.module.css"

import arrowPop from "../../assets/icons/arrow-pop.svg"
import arrowWhite from "../../assets/icons/arrow-white.svg"

import leftPillar from "../../assets/vectors/top-left-pillar.svg"
import middlePillar from "../../assets/vectors/top-middle-pillar.svg"
import rightPillar from "../../assets/vectors/top-right-right.svg"

export default () => {
    return <div class={styles.header}>
            <div class={styles.heading}>
                <div>
                    <h1><span>S</span>torhet</h1>
                    <h1><span>G</span>jennom</h1>
                    <h1><span>S</span>amarbeid</h1>
                </div>

                <div class={styles.buttons}>    
                    <p class={[buttons.action, styles.action].join(" ")}>
                        Ta kontakt
                        <img src={arrowWhite} alt="" />
                    </p>
                    <p class={[buttons.read, styles.read].join(" ")}>
                        Hvorfor oss
                        <img src={arrowPop} alt="" />
                    </p>
                </div>
            </div>
        
            <div class={styles.pillars}>
                <div class={styles.relative}>
                    <img class={styles.leftPillar} src={leftPillar} alt="" />
                    <img class={styles.middlePillar} src={middlePillar} alt="" />
                    <img class={styles.rightPillar} src={rightPillar} alt="" />
                </div>

                <div class={styles.absolute}> 
                    <div class={styles.fade}></div>
                    <div class={styles.box}></div>
                </div>
            </div>
    </div>
}