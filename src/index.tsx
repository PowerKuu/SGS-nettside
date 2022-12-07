import { router } from "@klevn/solid-router" 
import { JSX } from "solid-js/jsx-runtime"
import './index.css'

import Navbar, {NavItem} from "./components/navbar"

function wrapper(items:JSX.Element){
    return <>
        <Navbar icon="">
            <NavItem>Om oss</NavItem>
            <NavItem button={true}>Kontakt</NavItem>
        </Navbar>

        {items}


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