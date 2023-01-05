import router, { lazyLoad } from "@klevn/solid-router" 
import { JSX } from "solid-js/jsx-runtime"

import sgsIcon from "./assets/vectors/sgs-logo.svg"
import "./index.css"

import Navbar, {NavItem} from "./components/navbar/navbar"
import Footer, { FooterElement } from "./components/footer/footer"

import {whyusNav, contactNav, homeNav, bloggNav, scrollContact } from "./navigator"

import { posts } from "./routes/blogg/posts/posts"
import Post from "./routes/blogg/post/post"

type RouteName = "home"|"whyus"|"blogg"

interface ContactWrapperProps {
    children: JSX.Element
    routeName: RouteName
}

function ContentWrapper({children, routeName}:ContactWrapperProps){
    const isRoutes = {
        home: routeName == "home",
        whyus: routeName == "whyus",
        blogg: routeName == "blogg"
    }

    return <>
        <div class="fade"></div>

        <Navbar icon={sgsIcon} iconOnClick={() => homeNav(isRoutes.home)} dropdowns={[
            {
                text: "Hvorfor oss",
                onclick: whyusNav,
                active: isRoutes.whyus
            },
            {
                text: "Kontakt",
                onclick: () => contactNav(isRoutes.home),
                active: false
            },
            {
                text: "Blogg",
                onclick: () => bloggNav(),
                active: isRoutes.blogg
            },
            {
                text: "Hjem",
                onclick: () => homeNav(isRoutes.home),
                active: isRoutes.home
            }
        ]}>
            <NavItem active={isRoutes.whyus} onclick={whyusNav}>Hvorfor oss</NavItem>
            <NavItem active={isRoutes.home} onclick={() => homeNav(isRoutes.home)}>Hjem</NavItem>
            <NavItem active={isRoutes.blogg} onclick={() => bloggNav()}>Blogg</NavItem>
            <NavItem active={false} button={true} onclick={() => contactNav(isRoutes.home)}>Kontakt</NavItem>
        </Navbar>

        {children}
    
        <Footer copywrite="© SGS, Inc. 2022. Storhet gjennom samerbeid." pillars={isRoutes.home}>
            <FooterElement onclick={() => contactNav(isRoutes.home)}>Kontakt</FooterElement>
            <FooterElement onclick={() => homeNav(isRoutes.home)}>Hjem</FooterElement>
            <FooterElement onclick={() => bloggNav()}>Blogg</FooterElement>
            <FooterElement onclick={whyusNav}>Hvorfor oss</FooterElement>
        </Footer>
    </>
}


const routeHome =  lazyLoad(async () => (await import("./routes/home/home")).default)
const routeWhyus =  lazyLoad(async () => (await import("./routes/whyus/whyus")).default)
const routeBlogg =  lazyLoad(async () => (await import ("./routes/blogg/blogg")).default)

router.add("/", async () => {
    const RouteHome = await routeHome()

    return <ContentWrapper routeName="home">
        <RouteHome></RouteHome>
    </ContentWrapper>
})

router.add("/whyus", async () => {  
    const RouteWhyus = await routeWhyus()

    return <ContentWrapper routeName="whyus">
        <RouteWhyus></RouteWhyus>
    </ContentWrapper>
})

router.add("/blogg", async () => {   
    const RouteBlogg = await routeBlogg()

    return <ContentWrapper routeName="blogg">
        <RouteBlogg></RouteBlogg>
    </ContentWrapper>
})

for (var post of posts){
    const route = `/blogg/${post.title.split(" ").join("_").toLowerCase()}`

    router.add(route, () => {
        return <ContentWrapper routeName="blogg">
            <Post {...post}></Post>
        </ContentWrapper>
    })
}






router.add("404", async () => {
    const Route404 = (await import("./routes/404/404")).default
    
    return <Route404></Route404>
})

router.update()
