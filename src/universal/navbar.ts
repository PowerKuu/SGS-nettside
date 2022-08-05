import {$} from "mantle.web/core"
import css from "./navbar.module.css"

import {ScrollTo} from "../universal/manager"

export default function navbar(){
    return $("div", [
        $("div", [
            $("div", [
                $("p", ["SGS"], {onclick: () => ScrollTo("top", "/home")}),
            ], {class:css.left}),
            $("div", [
                $("p", ["HJEM"], {onclick: () => ScrollTo("top", "/home")}),
                $("p", ["OM-OSS"], {onclick: () => ScrollTo("info", "/home/info")}),
                $("div", ["KONTAKT"], {class: css.contact, onclick: () => ScrollTo("contact", "/home/contact")}),
            ], {class:css.right}),
        ], {class: css.navbar})
    ], {class: css.navbarcontainer}) 
}