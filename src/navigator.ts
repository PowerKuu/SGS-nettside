import router from "@klevn/solid-router"

export const scrollContact = () => {
    document.getElementById("contactScroll")?.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
}

export const contactNav = (homePage:boolean) => {
    if (!homePage) router.update("/", "?scroll=contact")
    scrollContact()
}

export const whyusNav = () => {
    router.update("/whyus")
}

router.on("load", () => {
    setTimeout(() => {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(String(prop)),
        }) as any
    
        if (params["scroll"] == "contact") {
            scrollContact()
            router.update("/", "?", false)
        }
    }, 100)
})