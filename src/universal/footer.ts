import {$} from "mantle.web/core"
import { mail } from "../home/home"
import css from "./footer.module.css"
import { ScrollTo } from "./manager"

export default function footer() {
    function footeritem(text:string, id:string|undefined = undefined, path:string|undefined = undefined) {
        const li = $("li", [text], {class: css.footerlistitem})
        if (id && path) li.element.onclick = () => ScrollTo(id, path)
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
                    footeritem("HJEM", "top", "/home"), 
                    footeritem("OM-OSS", "info", "/home/info"),
                    footeritem("KONTANK", "contact", "/home/contact"),
                ]),
                footerlist("KONTAKT INFO", [
                    footeritem(mail),
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