import React from 'react'
import { ContactModal, Landing } from "../components"
import  Layout from "../layouts"
const Kontakt = () => {

    return (
        <Layout noFooter >
            <Landing noContent />
            <ContactModal />
        </Layout>
    )
}

export default Kontakt