import home from "../styles/home.module.css"

import header from "../styles/header.module.css"
import solutions from "../styles/solutions.module.css"

import arrowPop from "../assets/icons/arrow-pop.svg"
import arrowWhite from "../assets/icons/arrow-white.svg"

import leftPillar from "../assets/pillars/left.svg"
import middlePillar from "../assets/pillars/middle.svg"
import rightPillar from "../assets/pillars/right.svg"


export default () => {
    return <div class={home.content}>
        <div class={header.header}>
            <div class={header.heading}>
                <div>
                    <h1><span>S</span>torhet</h1>
                    <h1><span>G</span>jennom</h1>
                    <h1><span>S</span>amarbeid</h1>
                </div>

                <div class={header.buttons}>    
                    <p class={header.action}>
                        Ta kontakt
                        <img src={arrowWhite} alt="" />
                    </p>
                    <p class={header.read}>
                        Hvorfor oss
                        <img src={arrowPop} alt="" />
                    </p>
                </div>
            </div>

            <div class={header.pillars}>
                <div class={header.relative}>
                    <img class={header.leftPillar} src={leftPillar} alt="" />
                    <img class={header.middlePillar} src={middlePillar} alt="" />
                    <img class={header.rightPillar} src={rightPillar} alt="" />
                </div>

                <div class={header.absolute}> 
                    <div class={header.fade}></div>
                    <div class={header.box}></div>
                </div>
            </div>
        </div>
    
        <div class={solutions.solutions}>
            <h2><span>Våre</span> løsninger</h2>
        </div>
    </div>
}