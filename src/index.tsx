import router, { lazyLoad } from "@klevn/solid-router" 
import { JSX } from "solid-js/jsx-runtime"

import sgsIcon from "./assets/vectors/sgs-logo.svg"
import "./index.css"

import Navbar, {NavItem} from "./components/navbar/navbar"
import Footer, { FooterElement } from "./components/footer/footer"

import {whyusNav, contactNav, homeNav, blogNav, scrollContact } from "./navigator"


type RouteName = "home"|"whyus"|"blog"

interface ContactWrapperProps {
    children: JSX.Element
    routeName: RouteName
}

function ContentWrapper({children, routeName}:ContactWrapperProps){
    const isRoutes = {
        home: routeName == "home",
        whyus: routeName == "whyus",
        blog: routeName == "blog"
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
                text: "Blog",
                onclick: () => blogNav(),
                active: isRoutes.blog
            },
            {
                text: "Hjem",
                onclick: () => homeNav(isRoutes.home),
                active: isRoutes.home
            }
        ]}>
            <NavItem active={isRoutes.whyus} onclick={whyusNav}>Hvorfor oss</NavItem>
            <NavItem active={isRoutes.home} onclick={() => homeNav(isRoutes.home)}>Hjem</NavItem>
            <NavItem active={isRoutes.blog} onclick={() => blogNav()}>Blog</NavItem>
            <NavItem active={false} button={true} onclick={() => contactNav(isRoutes.home)}>Kontakt</NavItem>
        </Navbar>

        {children}
    
        <Footer copywrite="© SGS, Inc. 2022. Storhet gjennom samerbeid." pillars={isRoutes.home}>
            <FooterElement onclick={() => contactNav(isRoutes.home)}>Kontakt</FooterElement>
            <FooterElement onclick={() => homeNav(isRoutes.home)}>Hjem</FooterElement>
            <FooterElement onclick={() => blogNav()}>Blog</FooterElement>
            <FooterElement onclick={whyusNav}>Hvorfor oss</FooterElement>
        </Footer>
    </>
}


const routeHome =  lazyLoad(async () => (await import("./routes/home/home")).default)
const routeWhyus =  lazyLoad(async () => (await import("./routes/whyus/whyus")).default)
const routeBlog =  lazyLoad(async () => (await import ("./routes/blog/blog")).default)

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

router.add("/blog", async () => {   
    const RouteBlog = await routeBlog()

    return <ContentWrapper routeName="blog">
        <RouteBlog></RouteBlog>
    </ContentWrapper>
})

router.add("404", async () => {
    const Route404 = (await import("./routes/404/404")).default
    
    return <Route404></Route404>
})

router.update()
