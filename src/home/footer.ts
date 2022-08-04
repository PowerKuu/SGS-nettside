import {$} from "mantle.web/core"
import css from "./footer.module.css"

export default function footer() {
    function footeritem(text:string) {
        return $("li", [text], {class: css.footerlistitem})
    }

    function footerlist(head:string, items:Array<any>) {
        return $("ul", [
            $("li", [head], {class: [css.footerlisthead]}),
            ...items
        ], {class: css.footerlist})
    }
        
    return $("div", [
        $("div", [
            footerlist("SIDER", [
                footeritem("OM-OSS"),
            ]),
            footerlist("SOSIALE MEDIER", [
                footeritem("Facebook: wdwjdwdnwj"),
            ])
        ], {class: css.footerleft}),
        $("div", [
            $("div", [
                $("img", [], {src: "/logo.svg", class: css.logo}),
            ], {class: css.footerlogo}),
        ], {class: css.footerright}),
    ], {class: css.footer})
}