import React, { useState, useEffect } from "react"
import Layout from "../../layouts"
import {
    LandingService,
    Links,
    ServiceSection,
    ContactBox,
    Section,
    ContentBox,
    ServiceIntroduction,
    CommisionModal
}
    from "../../components"
import { useMargin } from '../../components/helpers'
import { graphql } from "gatsby"
import Image1 from '../../images/media/logo.jpeg'
import Image2 from '../../images/media/strona.jpeg'
import Image3 from '../../images/media/social.jpeg'
import Image4 from '../../images/media/identyfikacja.jpeg'
import Main from '../../images/media/main.jpeg'
//import { StaticImage } from 'gatsby-plugin-image'


const LinksData = [
    {
        name: "Projekt logo",
    },
    {
        name: "Strona internetowa",
    },
    {
        name: "Social media",
    },
    {
        name: "Identyfikacja wizualna",
    },
]

let ContentData = [
    {
        name: "Projekt logo",
        title: "Projekt logo",
        //subtitle: 'Logo jest wstępem do zbudowania wiarygodnego biznesu oraz kluczowym',
        content: 'Logo jest wstępem do zbudowania wiarygodnego biznesu oraz kluczowym elementem pozycjonującym markę w branży. Profesjonalny logotyp wyróżni Twoją markę na rynku, przyciągnie uwagę potencjalnych klientów i będzie dla nich sygnałem, że można Tobie zaufać.',
        image: Image1,
        margin: "0",
    },
    {
        name: "Strona internetowa",
        title: "Strona internetowa",
        //subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        content: 'Wykorzystaj możliwości oraz zasięg stron internetowych i rozwijaj Twój e-biznes. Zaprojektujemy, wypromujemy, a także zapewnimy bieżącą obsługę i administrację strony internetowej Twojej firmy.',
        image: Image2,
        margin: "100%",
    },
    {
        name: "Social media",
        title: "Social media",
        //subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        content: 'Zadbaj o to by Twoi klienci znali Cię z jak najlepszej strony. Stała komunikacja oraz interesujące treści to nieodzowny element biznesu w XXI w. Pełne zarządzanie najważniejszymi kanałami mediowymi zaprocentuje i utrwali siłę marki.',
        image: Image3,
        margin: "100%",
    },
    {
        name: "Identyfikacja wizualna",
        title: "Identyfikacja wizualna",
        //subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        content: 'Jak nas widzą, tak nas piszą - to wiecznie prawdziwe stwierdzenie jest niebywale trafne w sferze biznesowej. Budowa wizerunku, tworzenie lojalnych klientów oraz oferowanie wartości dodatniej dla klienta to najważniejsze cechy sukcesu. Dzięki naszemu wsparciu Twoi przyszli i aktualni klienci zobaczą nową wartość w Twoim produkcie.',
        image: Image4,
        margin: "100%",
    }

]

const landingTextOld = "Twoja firma to suma wielu elementów. Dobre zaprojektowanie wizerunku polega na sprecyzowaniu grupy odbiorców którzy będą Twoimi potencjalnymi klientami. Właściwie dobranie kanału komunikacyjnego oraz wykreowanie wiadomości która zapadnie w pamięci odbiorcy to podstawa do zbudowania rozpoznawalności marki."
const landingText = "Twoja firma to suma wielu elementów."


const BiuroRachunkowe = () => {
    //let [New, Old, Current, setCurrentLink] = useLoadSection()
    const [Current, setCurrent] = useState("Projekt logo")
    console.log(Current)
    ContentData = useMargin(Current, ContentData)
    const Dom = ContentData.map(panel => (
        <ServiceSection title={panel.title} subtitle={panel.subtitle} image={panel.image} image2={panel.image2} margin={panel.margin}>
            {panel.content}
        </ServiceSection>))

    return (
        <Layout style={{ backgroundColor: "#fafafa" }}>
            <LandingService text={landingText} title='Media' modal>
                <img src={Main} />
            </LandingService>
            <ServiceIntroduction >
                Dobre zaprojektowanie wizerunku polega na sprecyzowaniu grupy odbiorców, którzy będą Twoimi potencjalnymi klientami. Właściwe dobranie
                kanału komunikacyjnego oraz wykreowanie wiadomości, która zapadnie w pamięci odbiorcy to podstawa do zbudowania rozpoznawalności marki.
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