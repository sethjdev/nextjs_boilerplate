import Link from 'next/link'
import Head from 'next/head'
import Header from './header'
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
                background-color: #e1e1e1!important;
            } 

            .main-body {
                padding-top: 75px;
            }

            input {
                appearance: none;
                outline: none;
            } 
        `}</style>
    </div>
)