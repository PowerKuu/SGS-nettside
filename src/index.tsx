import router from "@klevn/solid-router" 
import { JSX } from "solid-js/jsx-runtime"

import { lazy } from "solid-js"

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


const HomeComponent =  lazy(() => import("./routes/home/home"))
const WhyusComponent =  lazy(() => import("./routes/whyus/whyus"))
const Blog =  lazy(() => import ("./routes/blog/blog"))

router.add("/", async () => {
    return <ContentWrapper routeName="home">
        <HomeComponent></HomeComponent>
    </ContentWrapper>
})

router.add("/whyus", async () => {
    return <ContentWrapper routeName="whyus">
        <WhyusComponent></WhyusComponent>
    </ContentWrapper>
})

router.add("/blog", async () => {
    return <ContentWrapper routeName="blog">
        <Blog></Blog>
    </ContentWrapper>
})

router.update()