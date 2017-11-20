import Link from 'next/link'
import Head from 'next/head'
import Header from './navbar/header' 
import Meta from './meta'
import Footer from './footer'

export default ({ children }) => (
    <div>
        <Meta></Meta>
        <Header></Header>
        <div className="main-body">
            {children}
        </div>
        <Footer></Footer>
        <style jsx global>{`
            
            body {
                background-color: #fcfcfc;
                overflow-x: hidden!important;
            } 
            
            .main-body {
                padding-top: 80px;
            }

            input {
                appearance: none;
                outline: none;
            }

        `}</style>
    </div>
)