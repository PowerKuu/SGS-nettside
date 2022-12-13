import { router } from "@klevn/solid-router" 
import { JSX } from "solid-js/jsx-runtime"

import { lazy } from "solid-js"

import sgsIcon from "./assets/vectors/sgs-logo.svg"
import "./index.css"

import Navbar, {NavItem} from "./components/navbar/navbar"
import Footer, { FooterElement } from "./components/footer/footer"

import {whyusNav, contactNav, homeNav } from "./navigator"

interface ContactWrapperProps {
    children: JSX.Element
    isRouteHome: boolean
}

function ContentWrapper({children, isRouteHome}:ContactWrapperProps){
    return <>
        <div class="fade" id="fade"></div>

        <Navbar icon={sgsIcon} iconOnClick={() => homeNav(isRouteHome)}>
            <NavItem onclick={whyusNav}>Hvorfor oss</NavItem>
            <NavItem button={true} onclick={() => contactNav(isRouteHome)}>Kontakt</NavItem>
        </Navbar>

        {children}
    
        <Footer copywrite="© SGS, Inc. 2022. Storhet gjennom samerbeid." pillars={isRouteHome}>
            <FooterElement onclick={() => contactNav(isRouteHome)}>Kontakt</FooterElement>
            <FooterElement onclick={() => homeNav(isRouteHome)}>Hjem</FooterElement>
            <FooterElement onclick={whyusNav}>Hvorfor oss</FooterElement>
        </Footer>
    </>
}


const HomeComponent =  lazy(() => import("./routes/home/home"))
const WhyusComponent =  lazy(() => import("./routes/whyus/whyus"))

router.add("/", async () => {
    return <ContentWrapper isRouteHome={true}>
        <HomeComponent></HomeComponent>
    </ContentWrapper>
})

router.add("/whyus", async () => {
    return <ContentWrapper isRouteHome={false}>
        <WhyusComponent></WhyusComponent>
    </ContentWrapper>
})

router.add("/error", async () => {
    const NotFoundPage = (await import("./routes/404/404")).default

    return <NotFoundPage></NotFoundPage>
})

router.update()