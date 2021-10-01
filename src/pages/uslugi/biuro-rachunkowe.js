import React, { useState, useEffect } from "react"
import Layout from "../../layouts"
import {
    LandingService,
    Links,
    ServiceSection,
    ContactBox,
    Section,
    ContentBox,
}
    from "../../components"
import Image1 from '../../images/test2.jpg'
import Image2 from '../../images/test3.png'
import Image3 from '../../images/test1.jpg'

const LinksData = [
    {
        name: "kat1",
    },
    {
        name: "kat2",
    },
    {
        name: "kat3",
    },
    {
        name: "kat4",
    },
]

const ContentData = [
    {
        name: "kat1",
        title: "Kategoria 1, Tytuł",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: Image1,
        image2: Image2,
        margin: "0",
    },
    {
        name: "kat2",
        title: "Kategoria 2, Tytuł",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: Image1,
        margin: "-100vw",
    },
    {
        name: "kat3",
        title: "Kategoria 3, Tytuł",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: Image1,
        margin: "-200vw",
    },
    {
        name: "kat4",
        title: "Kategoria 4, Tytuł",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: Image1,
        margin: "-300vw",
    }
]

const useLoadSection = () => {
    const [CurrentLink, setCurrentLink] = useState("kat1")
    const [New, setNew] = useState(ContentData.filter(ct => ct.name === CurrentLink))
    const [Old, setOld] = useState(ContentData.filter(ct => ct.name === CurrentLink))
    useEffect(() => {
        console.log(ContentData.filter(ct => ct.name === CurrentLink))
        setOld(New)
        setNew(ContentData.filter(ct => ct.name === CurrentLink))
    }, [CurrentLink])
    return [New, Old, CurrentLink, setCurrentLink]

}

const useMargin = (Current) => {
    const [Margin, setMargin] = useState("0%")

    useEffect(() => {
        setMargin(ContentData.filter(ct => ct.name === Current)[0].margin)
    }, [Current])
    return Margin
}

const BiuroRachunkowe = () => {

    //let [New, Old, Current, setCurrentLink] = useLoadSection()
    const [Current, setCurrent] = useState("kat1")
    const Margin = useMargin(Current)
    const Dom = ContentData.map(panel => (
        <ServiceSection title={panel.title} image={panel.image} image2={panel.image2}>
            {panel.content}
        </ServiceSection>))

    return (
        <Layout style={{ backgroundColor: "#fafafa" }}>
            <LandingService />
            <Links links={LinksData} current={Current} onClick={setCurrent} />
            <div className="carousel" style={{ marginLeft: Margin }}>
                {Dom}
            </div>
            <Section row className="main">
                <Section row>
                    <div>
                        <div className="main-text" style={{padding: "100px 0", marginRight: "-200px"}}>
                            <ContactBox />
                        </div>
                    </div>
                    <div>
                        <ContentBox title="Text" style={{marginLeft: "200px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </ContentBox>
                    </div>
                    {/*
                <ContentBox title="Testowane teksty">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </ContentBox>
                
                    <div>
                        <img src={Image3} />
                    </div>
                    */}
                </Section>
            </Section>
        </Layout>
    )
}

export default BiuroRachunkowe