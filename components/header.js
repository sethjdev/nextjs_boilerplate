import Link from 'next/link'
import React from 'react';
import stylesheet from '../styles/header.scss';

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
                <header id="header" className="d-flex justify-content-start align-items-center">
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <nav className="main-navigation">
                        <ul className="d-flex justify-content-between align-items-center">
                            {this.listItems()}
                        </ul>
                    </nav>
                    <div className="ml-5 search-form">
                        <input type="text" placeholder="What service are you looking for?" />
                    </div>
                </header>
                <style jsx global>{`
                   #header {
                    
                        background-color: white;
                        width: 100%;
                        position: fixed;
                        top: 0;
                        left: 0;
                        display: block;
                        padding: 10px;
                    
                        .main-navigation {
                            ul {
                                list-style: none;
                                padding: 0;
                                margin: 0;
                                width: 400px;
                                
                                li {
                                    display: inline-block;
                    
                                    a {
                                        color: #525252;
                                        &:hover {
                                            text-decoration: none;
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
                    
                    }
                `}</style>
            </div>
        )
    }

}