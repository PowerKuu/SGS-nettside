import {$router} from "mantle.web/router"
import home from "./home/home"
import "./main.css"

$router.add("/", () => {
    return home()
})

$router.update()