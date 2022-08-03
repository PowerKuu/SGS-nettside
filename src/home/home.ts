import {$} from "mantle.web/core"
import navbar from "./navbar"

import css from "./home.module.css"

export default function home() {
    return $("div", [
        navbar(),
        top(),
        cards(),
        info(),
        form(),
        footer()
    ], {class: css.container})
}






function top() {
    return $("div", [
        $("div", [
            $("div", [
                $("span", ["SGS"], {class: css.mainheading}),
                $("span", ["MARKETING"], {class: css.subheading}),
                $("div", [], {class: css.headingseperator}),
            ], {class: css.topheading}),
            $("div", [
                $("span", ["KONTAKT"], {class: css.contact}),
                $("span", ["OM OSS"], {class: css.aboutus}),
            ], {class: css.topbuttons}),
            $("div", [
                $("span", ["'Info text'"], {class: css.topinfo}),
            ]),
        ], {class: css.topleft}),
        $("div", [
            $("img", [], {src: "/logo.svg", class: css.logo}),
        ], {class: css.topright}),
    ], {class: css.top})
}

function cards() {
    return $("div", [])
}

function info() {
    return $("div", [])
}   

function form() {
    return $("div", [])
}

function footer() {
    return $("div", [])
}