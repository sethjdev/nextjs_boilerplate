import Link from 'next/link'
import Head from 'next/head'
import Header from './header'
import Meta from './meta'

export default () => (
    <div>
        <footer className="pt-3 pb-3">
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="col-6">
                        <small>Website Inc.<br/>&copy; 2018 | All Rights Reserved</small>
                    </div>
                    <div class="col-6"></div>
                </div>
            </div>
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
