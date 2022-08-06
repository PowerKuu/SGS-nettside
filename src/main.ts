import {$router} from "mantle.web/router"
import home from "./home/home"
import "./main.css"

import navbar from "./universal/navbar"
import footer from "./universal/footer"

function HomePage({scroll}:any){
    const load = [
        navbar(),
        home(scroll),
        footer(),
    ]

    document.body.style.opacity = "100%"
    return load
}


$router.add("/", () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(String(prop)),
    })
    
    return HomePage({
        scroll: params["page"]
    })
})

$router.update()