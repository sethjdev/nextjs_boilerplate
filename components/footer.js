import Link from 'next/link'
import Head from 'next/head'
import Header from './header'
import Meta from './meta'

export default () => (
    <div>
        <footer>
            {'Footer'}
        </footer>
        <style jsx>{`
            footer {
                width: 100%;
                display: block;
                position: fixed;
                bottom: 0;
                left: 0;
                background-color: white;
            }
        `}</style>
    </div>
)
