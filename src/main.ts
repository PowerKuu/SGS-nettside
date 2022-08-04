import {$router} from "mantle.web/router"
import home from "./home/home"
import "./main.css"

import navbar from "./universal/navbar"
import footer from "./universal/footer"

$router.add("/", () => {
    return [
        navbar(),
        home(),
        footer(),
    ]
})

$router.update()