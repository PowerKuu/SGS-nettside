import styles from "./solutuons.module.css"

import webDevelopmentImage from "../../../assets/images/aboutus.png"

import { JSX } from "solid-js/jsx-runtime"

const SolutionContent = ({heading, icon, children}:{heading:string, icon:string, children:JSX.Element}) => {
    return <div class={styles.solutionsContent}>
        <div>
            <h3>{heading}</h3>
            <img src={icon} alt="" />
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
            <div class={styles.image} style={{"background-image": `url(${image})`}}>
                Hello
            </div>
        </div>
    </div>
}

export default () => {
    return <>
        <Solution heading={<><span>Web</span> utvikling</>} image={webDevelopmentImage}>
            <SolutionContent heading="Nettside" icon="">
            Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
            </SolutionContent>

            <SolutionContent heading="Merkevare" icon="">
            Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
            </SolutionContent>
        </Solution>
    </>
}