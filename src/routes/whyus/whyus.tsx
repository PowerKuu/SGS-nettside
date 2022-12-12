import { createEffect } from "solid-js"
import Simulation, {setSize} from "./simulation/simulation"
import Solutions from "./solutions/solutions"

import styles from "./whyus.module.css"

let simulation:any
let simulationWrapper:any

export default () => {
    const updateSimulationSize =() => {
        setSize(simulationWrapper.clientWidth, simulationWrapper.clientHeight)
    }

    const createSimulation = () => {
        const element = <div class={styles.simulationWrapper} ref={simulationWrapper}>
            <Simulation cssClass={styles.simulation}></Simulation>
        </div>

        simulation = element

        const observer = new ResizeObserver(() => {
            updateSimulationSize()
        })
    
        createEffect(() => {
            console.log(simulationWrapper)
            observer.observe(simulationWrapper)
        }, [])

        return element
    }

    return <div class={styles.content}>
        <Solutions></Solutions>

        {simulation ? simulation : createSimulation()}
    </div>
}