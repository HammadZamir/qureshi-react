import React from 'react'
import Header from '../landingPage/Header'
import Footer from '../landingPage/Footer'

function Layout({ children }) {
    return (
        <div>
            {/* Navbar  */}
            <Header />

            {/* main Content  */}
            <div className="content min-h-screen">
                {children}
            </div>

            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Layout