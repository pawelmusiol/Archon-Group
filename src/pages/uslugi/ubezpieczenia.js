import React, { useState, useEffect } from "react"
import Layout from "../../layouts"
import {
    LandingService,
    Links,
    ServiceSection,
    ContactBox,
    Section,
    ContentBox,
    ServiceIntroduction
}
    from "../../components"
import { graphql } from 'gatsby'
import { useMargin } from '../../components/helpers'
import Image1 from '../../images/ubezpieczenia/zycie.jpeg'
import Image2 from '../../images/ubezpieczenia/ocac.jpeg'
import Image3 from '../../images/ubezpieczenia/biznesowe.jpeg'
import Main from '../../images/ubezpieczenia/main.jpeg'
//import { StaticImage } from 'gatsby-plugin-image'


const LinksData = [
    {
        name: "Ubezpieczenia na życie i zdrowie",
    },
    {
        name: "Ubezpieczenie komunikacyjne",
    },
    {
        name: "Ubezpieczenie biznesowe",
    },
]

let ContentData = [
    {
        name: "Ubezpieczenia na życie i zdrowie",
        title: "Ubezpieczenia na życie i zdrowie",
        content: 'Ubezpieczenie na życie zapewnia wypłatę pieniędzy w razie poważnej choroby, nieszczęśliwego wypadku i niezdolności do pracy. Zabezpiecza też Twoich bliskich, gdyby Cię zabrakło. Indywidualne ubezpieczenie na życie możesz również rozszerzyć o wybrane opcje dodatkowe, takie jak ubezpieczenie zdrowotne.',
        image: Image1,
        margin: "0",
    },
    {
        name: "Ubezpieczenie komunikacyjne",
        title: "Ubezpieczenie komunikacyjne",
        content: 'Ubezpieczamy Twój pojazd na wypadek nieprzewidzianych zdarzeń oraz zapewniamy wsparcie Tobie i Twoim pasażerom.',
        image: Image2,
        margin: "100%",
    },
    {
        name: "Ubezpieczenie biznesowe",
        title: "Ubezpieczenie biznesowe",
        content: 'Ubezpieczenie twoich interesów to kluczowy element prawidłowego funkcjonowania każdej firmy. Dobrane produkty asekurując przyszłość na wszelki wypadek pozwalając skupić się na tym co najważniejsze.',
        image: Image3,
        margin: "100%",
    }

]

const landingText = <>Zabezpieczenie przyszłości szytymi na<br /> miarę produktami ubezpieczeniowymi, to ważny punkt<br /> w ochronie funkcjonowania Twoich interesów.</>

const Ubezpieczenia = () => {
    const [Current, setCurrent] = useState("Ubezpieczenia na życie i zdrowie")
    ContentData = useMargin(Current, ContentData)
    const Dom = ContentData.map(panel => (
        <ServiceSection title={panel.title} image={panel.image} image2={panel.image2} margin={panel.margin}>
            {panel.content}
        </ServiceSection>))

    return (
        <Layout style={{ backgroundColor: "#fafafa" }}>
            <LandingService text={landingText} title='Ubezpieczenia' className='landing-left'>
                <img src={Main} />
            </LandingService>
            <ServiceIntroduction style={{textAlign: 'justify', textAlignLast: 'right'}}>
                Analiza przedsiębiorstwa pod względem najistotniejszych dziedzin działalności zapewni wymaganą obronę przed wydarzeniami losowymi bądź nieszczęśliwymi wypadkami.
            </ServiceIntroduction>
            <Links links={LinksData} current={Current} onClick={setCurrent} />
            <div className="outer-carousel">
                <div className="carousel" >
                    {Dom}
                </div>
            </div>

            <Section row className="main">
                {/* 
                <Section row>
                    <div>
                        <div className="main-text" style={{ padding: "100px 0", marginRight: "-200px" }}>
                            <ContactBox />
                        </div>
                    </div>
                    <div>
                        <ContentBox title="Text" style={{ marginLeft: "200px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </ContentBox>
                    </div>
                    
                <ContentBox title="Testowane teksty">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </ContentBox>
                
                    <div>
                        <img src={Image3} />
                    </div>
                    
                </Section>
             */}
            </Section>
        </Layout >
    )
}


export default Ubezpieczenia
