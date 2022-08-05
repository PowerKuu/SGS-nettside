import {$, $singel} from "mantle.web/core"

import css from "./home.module.css"
import { norway } from "./lang"

export default function home() {
    return $("div", [
        top(),
        cards(),
        info(),
        form(),
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
    const SubmitText = (text:string, state = 0) => {
        const fail = state == 0 ? "" :  state == 1 ? css.submittextsuccess : css.submittextfail
        return $("p", [text], {class: [css.submittext, fail]})
    }

    const SubmitTextSingel = $singel(SubmitText, SubmitText(""))

    const forminput = (text:string, name:string, large = false, numbers = false) => {
        const input =  $(large ? "textarea" : "input" , [], {type: "text", name:name, class: [large ? css.forminputlarge : "", css.forminput]})

        if (numbers) {
            input.element.addEventListener('input', RestrictNumber);
            function RestrictNumber () {  
                var newValue = input.element.value.replace(new RegExp(/[^\d]/,'ig'), "");
                input.element.value = newValue;
            }
        }

        return $("div", [
            $("p", [text], {class: css.forminputhead}),
            input
        ], {class: large ? css.forminputwraplarge : css.forminputwrap})
    }

    const form = $("form", [
        forminput("Navn", "name"),
        forminput("Telefon (optional)", "phone", false, true),
        forminput("E-post", "email"),
        forminput("Bedrift navn (optional)", "company"),
        forminput("Medling", "message", true),

        $("input", [
            $("p", ["SEND"])
        ], {type: "submit", value: "SEND", class: css.formsubmit}),
    ], {class: css.forminputs})

    form.element.onsubmit = async (e) => {
        e.preventDefault()
        const SubmitData = new FormData(form.element)
        const RequestBody = {
            name: SubmitData.get("name"),
            phone: SubmitData.get("phone"),
            email: SubmitData.get("email"),
            company: SubmitData.get("company"),
            message: SubmitData.get("message"),
        }

        console.log(RequestBody)

        if (!RequestBody.name || !RequestBody.email || !RequestBody.message) {
            SubmitTextSingel("Du må fylle ut alle de nødvendige feltene!", -1)
            return
        }

        const data = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(RequestBody)
        })

        if (data.status === 200) {
            SubmitTextSingel("Sendt! Du vill høre tilbake fra oss straks på mail eller telefon.", 1)
            form.element.reset()
            return
        } else {
            SubmitTextSingel("En ukjent feil oppsto ved sending. Gjerne kontakt oss gjennom mail.", -1)
            return
        }
    }

    return $("div", [
        $("div", [
            $("div", ["KONTAKT OSS"], {class: css.formhead}),
            form,
            SubmitTextSingel
        ], {class: css.form}),
        $("div", [
            $("p", ["GI OSS INFO"], {class: css.forminfoheader}),
            $("p", [norway.giveusinfo], {class: css.forminfotext}),
            $("p", ["VET DU IKKE HVA DU HVIL"], {class: css.forminfoheader}),
            $("p", [norway.dontknow], {class: css.forminfotext}),
            $("p", ["KONTANKT OSS OGSÅ PÅ"], {class: css.forminfoheader}),
            $("div", [
                $("div", [
                    $("img", [], {src: "./icons/gmail.svg", class: css.formicon}),
                    $("span", ["fill@gmail.com"], {class: css.formicontext})
                ], {class: css.formiconwrap}),
            ], {class: css.forminfoicons})
        ], {class: css.forminfo}),
    ], {class: css.formwrap})
}
