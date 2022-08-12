import {$} from "mantle.web/core"
import { mail } from "../home/home"
import css from "./footer.module.css"
import { ScrollTo } from "./manager"

export default function footer() {
    function footeritem(text:string, id:string|undefined = undefined, quary:string|undefined = undefined) {
        const li = $("li", [text], {class: css.footerlistitem})
        if (id) li.element.onclick = () => ScrollTo(id, quary)
        return li
    }

    function footerlist(head:string, items:Array<any>) {
        return $("ul", [
            $("li", [head], {class: [css.footerlisthead]}),
            ...items
        ], {class: css.footerlist})
    }

    return $("div", [
        $("div", [
            $("div", [
                footerlist("SIDER", [
                    footeritem("HJEM", "top"), 
                    footeritem("OM-OSS", "info", "info"),
                    footeritem("KONTAKT", "contact", "contact"),
                ]),
                footerlist("KONTAKT INFO", [
                    footeritem(mail),
                    footeritem("+47 91331705"),
                ]),
                footerlist("ANNEN INFO", [
                    footeritem("© 2022 SGS"),
                ])
            ], {class: css.footerleft}),
            $("div", [
                $("div", [
                    $("img", [], {src: "/logo.svg", class: css.logo}),
                ], {class: css.footerlogo}),
            ], {class: css.footerright}),
        ], {class: css.footer})
    ], {class: css.footerwrap})  
}