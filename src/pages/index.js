import React, { useState } from "react"
import Layout from "../layouts"
import { Landing, MeetingModal, Introduction, Links, MainSection } from "../components/"
import "../components/css/landing.scss"

const LinksData = [
    {
        name: "Biuro rachunkowe",
        to:"/biuro-rachunkowe",
    },
    {
        name: "Ubezpieczenia",
        to: "/ubezpieczenia"
    },
    {
        name: "Media",
        to: "/media"
    },
    {
        name: "Finanse",
        to: "/finanse"
    },
]

const IndexPage = () => {
    const [ModalOpen, setModalOpen] = useState(false)
    return (
        <Layout>
            {ModalOpen && <MeetingModal Close={() => setModalOpen(false)} />}
            <Landing Modal={ModalOpen} OpenModal={() => setModalOpen(true)} />
            <Introduction>dupa</Introduction>
            <Links links={LinksData} prefix="/uslugi" />
            <MainSection />
        </Layout>
    )
}

export default IndexPage