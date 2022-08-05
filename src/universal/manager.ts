import $router from "mantle.web/router"

export function ScrollTo(id:string, path:string|undefined = undefined) {
    const element = document.getElementById(id)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth', block: 'center'})
    if (path) $router.update(path, "", false)
}