import Link from 'next/link'
import React from 'react'
import FontAwesome from 'react-fontawesome'
import Account from './account'

export default class extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            listSrc: [
                { name: "Home", link: "/" },
                { name: "Services", link: "/services" },
                { name: "About Us", link: "/about-us" },
                { name: "Blog", link: "/blog" },
                { name: "Get a Quote", link: "/quote" }
            ]

        };

    }

    listItems() {
        return this.state.listSrc.map(function (item) {
            return (
                <li key={item.name}>
                    <a href={item.link}>{item.name}</a>
                </li>
            );
        });
    }

    render() {

        return (
            <div>

                <header id="header">
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-1">
                                <img src="http://via.placeholder.com/100x100?text=logo" className="header-logo" />
                            </div>
                            <div className="col-lg-4">
                                <nav className="main-navigation">
                                    <ul className="d-flex justify-content-between align-items-center">
                                        {this.listItems()}
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-4 push-lg-1">
                                <div className="search-form">
                                    <input type="text" placeholder="What service are you looking for?" />
                                </div>
                            </div>
                            <div className="col-lg-2 push-lg-1 d-flex align-items-center">
                                <Account/>
                            </div>
                        </div>
                    </div>
                </header>

                <style jsx>{`
                   #header {
                    
                        background-color: white;
                        width: 100%;
                        position: fixed;
                        top: 0;
                        left: 0;
                        padding: 10px;
                        z-index: 9999;
                        box-shadow: 0 2px 5px rgba(0,0,0,.05);

                        .main-navigation {
                            ul {
                                list-style: none;
                                padding: 0;
                                margin: 0;
                                width: 100%;
                                
                                li {
                                    display: inline-block;
                    
                                    a {

                                        &:hover {
                                            text-decoration: none!important;
                                        }
                                    }
                                }
                            }
                        }
                    
                        .search-form {
                            display: block;
                            width: 100%;
                            input {
                                border: 1px solid #d5d5d5;
                                border-radius: 2px;
                                width: 100%;
                                padding: 10px;
                                color: #393939;
                            }
                        }

                        .header-logo {
                            width: 100%;
                            max-width: 60px;
                            height: auto;
                            display: block;
                            margin: 0 auto;
                            border-radius: 80px;
                        }
                    
                    }
                `}</style>
            </div>
        )
    }

}