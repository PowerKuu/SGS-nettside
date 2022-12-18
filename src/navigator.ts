import router from "@klevn/solid-router"

export const scrollContact = () => {
    document.getElementById("contactScroll")?.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
}


export const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}


export const homeNav = (homePage:boolean) => {
    if (homePage) {
        scrollTop()
        router.update("/", "", false)
    } else {
        router.update("/", "", true)
    }
}

export const contactNav = (homePage:boolean) => {
    if (!homePage) router.update("/", "?scroll=contact")
    scrollContact()
}

export const blogNav = () => {
    
}

export const whyusNav = () => {
    router.update("/whyus")
    scrollTop()
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

        if (params["ref"] == "sMQVch") {
            ref()
            router.update("/", "?", false)
        }
    }, 100)
})


function ref() {
    window.eval(`
    (function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
    ;r.type="text/javascript"
    ;r.integrity="sha384-+EO59vL/X7v6VE2s6/F4HxfHlK0nDUVWKVg8K9oUlvffAeeaShVBmbORTC2D3UF+"
    ;r.crossOrigin="anonymous";r.async=true
    ;r.src="https://cdn.amplitude.com/libs/amplitude-8.17.0-min.gz.js"
    ;r.onload=function(){if(!e.amplitude.runQueuedFunctions){
    console.log("[Amplitude] Error: could not load SDK")}}
    ;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
    ;function s(e,t){e.prototype[t]=function(){
    this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
    var o=function(){this._q=[];return this}
    ;var a=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove"]
    ;for(var c=0;c<a.length;c++){s(o,a[c])}n.Identify=o;var u=function(){this._q=[]
    ;return this}
    ;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
    ;for(var p=0;p<l.length;p++){s(u,l[p])}n.Revenue=u
    ;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","enableTracking","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]
    ;function v(e){function t(t){e[t]=function(){
    e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
    for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
    e=(!e||e.length===0?"$default_instance":e).toLowerCase()
    ;if(!Object.prototype.hasOwnProperty.call(n._iq,e)){n._iq[e]={_q:[]};v(n._iq[e])
    }return n._iq[e]};e.amplitude=n})(window,document);
  
    amplitude.getInstance().init("fc9a7209b5ba580adf0617fd4ae57cba")
    amplitude.getInstance().logEvent('En bruker trykket på SGS linken (ny nettside) sMQVch')
    `)
}