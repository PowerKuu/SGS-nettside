import $router from "mantle.web/router"

export function ScrollTo(id:string, quary:string|undefined = undefined) {
    const element = document.getElementById(id)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth', block: 'center'})
    if (quary) $router.update("/", "?page=" + quary, false)
    else $router.update("/", "", false)
}