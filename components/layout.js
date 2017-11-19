import Link from 'next/link'
import Head from 'next/head'
import Header from './header'
import Meta from './meta'
import Footer from './footer'
import Depends from './depends'
export default ({ children }) => (
    <div>
        <Meta></Meta>
        <Header></Header>
        <Depends></Depends> 
        <div className="main-body">
            {children}
        </div>
        <Footer></Footer>
    </div>
)