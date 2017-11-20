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

            h1,h2,h3,h4,h5,h6,a,p,button,input,select,textarea, small {
                font-family: 'Barlow', sans-serif!important;
            }
            
            .main-body {
                padding-top: 80px;
                padding-bottom: 80px;
            }

            input {
                appearance: none;
                outline: none;
            }

            .lg-title {
                font-weight: 100;
            }

        `}</style>
    </div>
)