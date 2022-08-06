import {$} from "mantle.web/core"
import css from "./navbar.module.css"

import {ScrollTo} from "../universal/manager"

export default function navbar(){
    return $("div", [
        $("div", [
            $("div", [
                $("p", ["SGS"], {onclick: () => ScrollTo("top")}),
            ], {class:css.left}),
            $("div", [
                $("p", ["HJEM"], {onclick: () => ScrollTo("top")}),
                $("p", ["OM-OSS"], {onclick: () => ScrollTo("info", "info")}),
                $("div", ["KONTAKT"], {class: css.contact, onclick: () => ScrollTo("contact", "contact")}),
            ], {class:css.right}),
        ], {class: css.navbar})
    ], {class: css.navbarcontainer}) 
}