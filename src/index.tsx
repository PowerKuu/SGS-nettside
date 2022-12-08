import { router } from "@klevn/solid-router" 
import { JSX } from "solid-js/jsx-runtime"

import sgsIcon from "./assets/vectors/sgs-logo.svg"
import "./index.css"

import Navbar, {NavItem} from "./components/navbar/navbar"
import Footer, { FooterElement } from "./components/footer/footer"

function wrapper(items:JSX.Element){
    return <>
        <Navbar icon={sgsIcon}>
            <NavItem>Om oss</NavItem>
            <NavItem button={true}>Kontakt</NavItem>
        </Navbar>

        {items}
    
        <Footer copywrite="© SGS, Inc. 2022. Storhet gjennom samerbeid.">
            <FooterElement>Om oss</FooterElement>
            <FooterElement>Kontakt</FooterElement>
            <FooterElement>Hvorfor oss</FooterElement>
        </Footer>
    </>
}

router.add("/", async () => {
    const route = await import("./routes/home")
    return wrapper(route.default())
})

router.add("/about", async () => {
    const route = await import("./routes/about")
    return wrapper(route.default())
})

router.update()