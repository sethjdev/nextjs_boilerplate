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
    </div>
)