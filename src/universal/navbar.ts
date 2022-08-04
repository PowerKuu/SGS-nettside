import {$} from "mantle.web/core"
import css from "./navbar.module.css"

export default function navbar(){
    return $("div", [
        $("div", [
            $("div", [
                $("p", ["SGS"]),
            ], {class:css.left}),
            $("div", [
                $("p", ["HJEM"]),
                $("p", ["OM-OSS"]),
                $("div", ["KONTAKT"], {class: css.contact}),
            ], {class:css.right}),
        ], {class: css.navbar})
    ], {class: css.navbarcontainer}) 
}