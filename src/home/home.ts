import {$} from "mantle.web/core"
import navbar from "./navbar"
import footer from "./footer"

import css from "./home.module.css"
import { norway } from "./lang"

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
                $("span", [norway.info], {class: css.topinfo}),
            ]),
        ], {class: css.topleft}),
        $("div", [  
            $("img", [], {src: "/logo.svg", class: css.logo}),
        ], {class: css.topright}),
    ], {class: css.top})
}

function cards() {
    function card(title:string, text:string, image:string){
        return $("div", [
            $("div", [
                $("img", [], {src: image, class: css.cardimage})
            ], {class: css.cardimagewrap}),
            $("div", [title], {class: css.cardheading}),
            $("div", [text], {class: css.cardtext}),
        ], {class: css.card})
    }

    return $("div", [
        card("REKLAME", norway.ad, "./cards/ad.svg"),
        card("NETTSIDE", norway.website, "./cards/website.svg"),
        card("SOSIALE-MEDIER", norway.social, "./cards/social.svg"),
    ], {class: css.cards})
}

function info() {
    return $("div", [
        $("div", [
            $("div", ["OM OSS"], {class: css.infohead}),
            $("div", [norway.aboutus], {class: css.infotext}),
        ], {class: css.infocard}),
        $("div", [
            $("div", ["HOVRFOR OSS"], {class: css.infohead}),
            $("div", [norway.whyus], {class: css.infotext}),
        ], {class: css.infocard}),
    ], {class: css.info})
}   

function form() {
    return $("div", [])
}
