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
import { useMargin } from '../../components/helpers'
import { graphql } from "gatsby"
import Image1 from '../../images/biuro-rachunkowe/ksiegowosc.jpeg'
import Image2 from '../../images/biuro-rachunkowe/kadry.jpeg'
import Image3 from '../../images/biuro-rachunkowe/bhp.jpeg'
import Image4 from '../../images/biuro-rachunkowe/analiza.jpeg'
import Image5 from '../../images/biuro-rachunkowe/optymalizacja.jpeg'
import Main from '../../images/biuro-rachunkowe/main.jpeg'
//import { StaticImage } from 'gatsby-plugin-image'


const LinksData = [
    {
        name: "Księgowość",
    },
    {
        name: "Kadry",
    },
    {
        name: "BHP",
    },
    {
        name: "Analizy",
    },
    {
        name: "Optymalizacja Podatkowa"
    }
]

let ContentData = [
    {
        name: "Księgowość",
        title: "Księgowość",
        content: 'Prowadzenie rozliczeń jednoosobowych działalności gospodarczych, spółek, fundacji oraz stowarzyszeń. Archiwizacja dokumentacji rocznej firmy oraz wsparcie przy kategoryzowaniu bieżących wydatków.',
        image: Image1,
        margin: "0",
    },
    {
        name: "Kadry",
        title: "Kadry",
        content: 'Naliczanie wynagrodzeń i sporządzanie list płac z umów cywilnoprawnych. Obsługa ZUS pracowników. Prowadzenie i aktualizacja akt osobowych pracowników oraz sporządzanie i przesyłanie deklaracji i raportów na potrzeby ZUS, US, GUS i PFRON.',
        image: Image2,
        margin: "150%",
    },
    {
        name: "BHP",
        title: "BHP",
        content: 'Szkolenia pracowników w zakresie bezpieczeństwa i higieny pracy wykonywane zdalne lub bezpośrednio u klienta zapewniające niezbędną wiedzę w kryzysowych sytuacjach. Kontrola kluczowych elementów ochrony zdrowia i życia pracowników.',
        image: Image3,
        margin: "150%",
    },
    {
        name: "Analizy",
        title: "Analizy",
        content: 'Sporządzanie sprawozdań finansowych, bilansów oraz rachunku zysków i strat. Wyszczególnienie strategicznych danych wykazujących faktyczny stan przedsiębiorstwa/firmy oraz jego/jej prognozy na przyszłość. ',
        image: Image4,
        margin: "150%",
    },
    {
        name: "Optymalizacja Podatkowa",
        title: "Optymalizacja Podatkowa",
        content: 'Przygotowywanie planu redukcji zobowiązań podatkowych oraz analiza aktualnych świadczeń względem urzędu skarbowego i zakładu ubezpieczeń społecznych. Opieka przy kontakcie z najważniejszymi urzędami i jednostkami administracyjnymi. ',
        image: Image5,
        margin: "150%",
    }

]

const landingText = <>Kompletny pakiet rozwiązań w zakresie<br /> rozliczeń oraz doradztwa i analizy<br /> biznesowo-podatkowej.</>

const BiuroRachunkowe = ({ data }) => {
    //let [New, Old, Current, setCurrentLink] = useLoadSection()
    const [Current, setCurrent] = useState("Księgowość")
    ContentData = useMargin(Current, ContentData)
    const Dom = ContentData.map(panel => (
        <ServiceSection title={panel.title} image={panel.image} image2={panel.image2} margin={panel.margin}>
            {panel.content}
        </ServiceSection>))

    return (
        <Layout style={{ backgroundColor: "#fafafa" }}>
            <LandingService
                text={landingText}
                title='Biuro Rachunkowe'
                right
            >
                <img src={Main} />
            </LandingService>
            <ServiceIntroduction style={{textAlign: 'justify', textAlignLast: 'right'}} >
                Nasi eksperci zagwarantują, że nawet najbardziej zawikłane przepisy prawa staną się zrozumiałe i oczywiste. Oferujemy pełne wsparcie i współpracę zarówno zdalną jak i w kontakcie bezpośrednim, zależnie od potrzeb i wymagań klienta.<br /><br />
                Nasze biuro rachunkowe sprawi,że skupisz się na tym co dla twojego przedsiębiorstwa najważniejsze.
            </ServiceIntroduction>
            <Links links={LinksData} current={Current} onClick={setCurrent} />
            <div className="outer-carousel">
                <div className="carousel">
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

export default BiuroRachunkowe

export const query = graphql`{
    file(relativePath: { eq: "biuro_rachunkowe_glowna.jpeg" }) {
  childImageSharp {
            id
        }
    }
}`