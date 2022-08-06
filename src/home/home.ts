import {$, $singel} from "mantle.web/core"
import {$router} from "mantle.web/router"

import css from "./home.module.css"
import {norway} from "./lang"
import {ScrollTo} from "../universal/manager"

export const mail = "sgs.markedsforing@gmail.com"

export default function home(ElementKey:string|undefined = undefined) {
    $router.on("load", () => {
        if (ElementKey) ScrollTo(ElementKey)
    })

    return $("div", [
        top(),
        cards(),
        info(),
        form()
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
                $("span", ["KONTAKT"], {class: css.contact, onclick: () => ScrollTo("contact", "/home/contact")}),
                $("span", ["OM OSS"], {class: css.aboutus, onclick: () => ScrollTo("info", "/home/info")}),
            ], {class: css.topbuttons}),
            $("div", [norway.info], {class: css.topinfo}),
        ], {class: css.topleft}),
        $("div", [  
            $("img", [], {src: "/logo.svg", class: css.logo}),
        ], {class: css.topright}),
    ], {class: css.top, id: "top"})
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
        card("REKLAME", norway.ad, "/cards/ad.svg"),
        card("NETTSIDE", norway.website, "/cards/website.svg"),
        card("SOSIALE-MEDIER", norway.social, "/cards/social.svg"),
    ], {class: css.cards, id: "cards"})
}

function info() {
    return $("div", [
        $("div", [
            $("div", ["OM OSS"], {class: css.infohead}),
            $("div", [norway.aboutus], {class: css.infotext}),
        ], {class: css.infocard}),
        $("div", [
            $("div", ["OM VÅRE TJENESTER"], {class: css.infohead}),
            $("div", [norway.whyus], {class: css.infotext}),
        ], {class: css.infocard}),
    ], {class: css.info, id: "info"})
}   

function form() {
    const formurl = "https://faas-ams3-2a2df116.doserverless.co/api/v1/web/fn-194ec3e4-9ac3-40f7-986b-b6b7ab5cc337/cloud/contact"

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
        $("div", [
            forminput("Navn", "name"),
            forminput("Telefon (valgfritt)", "phone", false, true),
        ], {class: css.forminputrow}),
        $("div", [
            forminput("E-post", "email"),
            forminput("Bedriftsnavn (valgfritt)", "company"),
        ], {class: css.forminputrow}),
        forminput("Melding", "message", true),

        $("input", [
            $("p", ["SEND"])
        ], {type: "submit", value: "SEND", class: css.formsubmit}),
    ], {class: css.forminputs})

    form.element.onsubmit = async (e) => {
        e.preventDefault()
        SubmitTextSingel("Sender...", 0)
        const SubmitData = new FormData(form.element)
        const RequestBody = {
            name: SubmitData.get("name"),
            phone: SubmitData.get("phone"),
            email: SubmitData.get("email"),
            companyname: SubmitData.get("company"),
            message: SubmitData.get("message"),
        }

        console.log(RequestBody)

        if (!RequestBody.name || !RequestBody.email || !RequestBody.message) {
            SubmitTextSingel("Du må fylle ut alle de nødvendige feltene!", -1)
            return
        }

        const data = await fetch(formurl, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(RequestBody),
        })

        const unknown = "En ukjent feil oppsto ved sending. Gjerne kontakt oss gjennom mail."
        const json = await data.json()

        if (json.sent === true) SubmitTextSingel("Sendt! Du vill høre tilbake fra oss straks på mail eller telefon.", 1)
        else if(json.error === 1) {
            SubmitTextSingel("Du må fylle ut alle de nødvendige feltene!", -1)
        } else if (json.error === 2) {
            SubmitTextSingel("E-postadressen du oppga er ikke gyldig!", -1)
        } else if (json.error === 3) {
            SubmitTextSingel(unknown, -1)
        }
        form.element.reset()
        return

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
            $("p", ["USIKKER"], {class: css.forminfoheader}),
            $("p", [norway.dontknow], {class: css.forminfotext}),
            $("p", ["KONTANKT OSS OGSÅ PÅ"], {class: css.forminfoheader}),
            $("div", [
                $("div", [
                    $("img", [], {src: "/icons/gmail.svg", class: css.formicon}),
                    $("span", [mail], {class: css.formicontext})
                ], {class: css.formiconwrap}),
                $("div", [
                    $("span", ["Tlf     +47 91331705"], {class: css.formicontext}),
                ], {class: css.formiconwrap}),
            ], {class: css.forminfoicons})
        ], {class: css.forminfo}),
    ], {class: css.formwrap, id: "contact"})
}
