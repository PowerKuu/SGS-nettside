import styles from "./solutuons.module.css"

import webDevelopmentImage from "../../../assets/images/aboutus.png"

import websiteVector from "../../../assets/icons/website.svg"
import brandingVector from "../../../assets/icons/branding.svg"

import socialVector from "../../../assets/icons/social-media.svg"
import analyzeVector from "../../../assets/icons/analyze.svg"

import { JSX } from "solid-js/jsx-runtime"

const SolutionContent = ({heading, icon, children}:{heading:string, icon:string, children:JSX.Element}) => {
    return <div class={styles.solutionsContent}>
        <div>
            <img src={icon} alt="" />
            <h3>{heading}</h3>
        </div>
        <p>
            {children}
        </p>
    </div>
}

const Solution = ({heading, image, children}:{heading:JSX.Element, image:string, children:JSX.Element}) => {
    return <div class={styles.solution}>
        <h2>{heading}</h2>
        <div>
            <div>
                {children}
            </div>
        </div>
    </div>
}

export default () => {
    return <div class={styles.solutions}>
        <Solution heading={<><span>Web</span> utvikling</>} image={webDevelopmentImage}>
            <SolutionContent heading="Nettside" icon={websiteVector}>
            Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
            </SolutionContent>

            <SolutionContent heading="Merkevare" icon={brandingVector}>
            Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
            </SolutionContent>
        </Solution>


        <Solution heading={<><span>Markeds</span>føring</>} image={webDevelopmentImage}>
            <SolutionContent heading="Sosiale medier" icon={socialVector}>
            Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
            </SolutionContent>

            <SolutionContent heading="Analytikere" icon={analyzeVector}>
            Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
            </SolutionContent>
        </Solution>
    </div>
}