import styles from "./header.module.css"
import { ActionButton, ReadButton } from "../../../components/buttons/buttons"

import arrowPop from "../../../assets/icons/arrow-pop.svg"
import arrowWhite from "../../../assets/icons/arrow-white.svg"

import leftPillar from "../../../assets/vectors/top-left-pillar.svg"
import middlePillar from "../../../assets/vectors/top-middle-pillar.svg"
import rightPillar from "../../../assets/vectors/top-right-right.svg"

import { contactNav, whyusNav } from "../../../navigator"

import Typewriter from "typewriter-effect"
import { createEffect } from "solid-js"

export default () => {
    let test:any


    return <div class={styles.header}>
            <div class={styles.heading}>
                <div>
                    <h1 ref={test}><span>S</span>torhet</h1>
                    <h1><span>G</span>jennom</h1>
                    <h1><span>S</span>amarbeid</h1>
                </div>

                <div class={styles.buttons}>    
                    <ActionButton class={styles.action} onclick={() => contactNav(true)}>
                        Ta kontakt
                        <img src={arrowWhite} alt="" />
                    </ActionButton>

                    <ReadButton class={styles.read} onclick={() => whyusNav()}>
                        Hvorfor oss
                        <img src={arrowPop} alt="" />
                    </ReadButton>
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