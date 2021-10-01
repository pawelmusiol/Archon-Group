import React from 'react'
import { LoginModal, Landing } from "../components"
import  Layout from "../layouts"
const PanelKlienta = () => {

    return (
        <Layout noFooter >
            <Landing noContent />
            <LoginModal />
        </Layout>
    )
}

export default PanelKlienta