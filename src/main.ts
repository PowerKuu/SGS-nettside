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

$router.add("/home/", HomePage)
$router.add("/home/[scroll]", HomePage)
$router.add("/", () => {
    $router.update("/home/", "", false)
    return HomePage({})
})

$router.update()