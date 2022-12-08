import Seperator from "../components/seperator/seperator"

import home from "../styles/home.module.css"

import Header from "../elements/header/header"
import Solutions from "../elements/solutions/solutions"
import Whyus from "../elements/whyus/whyus"
import Contact from "../elements/contact/contact"

export default () => {
    console.log("hello")
    return <div class={home.content}>
        <Header></Header>

        {/* To hide pillar transition */}
        <div style={{
            "background-color": "white",
            "position": "relative"
        }}>
            <Solutions></Solutions>

            <Seperator></Seperator>

            <Whyus></Whyus>

            <Seperator></Seperator>

            <Contact></Contact>
        </div>
    </div>
}