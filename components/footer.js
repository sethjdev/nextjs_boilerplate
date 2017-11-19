import Link from 'next/link'
import Head from 'next/head'
import Header from './header'
import Meta from './meta'

export default () => (
    <div>
        <footer className="pt-2 pb-2">
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="col-6 d-flex align-items-center justify-content-start">
                        <img src="http://via.placeholder.com/100x100?text=logo" className="footer-logo mr-3" />
                        <div>
                            <small className="d-block">Website Inc.</small>
                            <small className="d-block">&copy; 2018 | All Rights Reserved</small>
                        </div>
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

                small {
                    color: #a0a0a0;
                }
                
                .footer-logo {
                    width: 100%;
                    max-width: 50px;
                    height: auto;
                    display: block;
                    border-radius: 50px;
                }
            }
        `}</style>
    </div>
)
