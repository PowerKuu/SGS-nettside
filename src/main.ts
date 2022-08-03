import {$router} from "mantle.web/router"
import home from "./home/home"

$router.add("/", home)
$router.update()