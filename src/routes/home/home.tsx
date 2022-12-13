import Seperator from "../../components/seperator/seperator"

import home from "./home.module.css"
import Header from "./header/header"
import Solutions from "./solutions/solutions"
import AboutUs from "./aboutus/aboutus"
import Contact from "./contact/contact"

export default () => {
    return <div class={home.content}>
        <Header></Header>

        {/* To hide pillar transition */}
        <div style={{
            "background-color": "white",
            "position": "relative"
        }}>
            <Solutions></Solutions>

            <Seperator></Seperator>

            <AboutUs></AboutUs>

            <Seperator></Seperator>

            <Contact></Contact>
        </div>
    </div>
}