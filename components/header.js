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
            <header id="header" class="d-flex justify-content-start align-items-center">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <nav className="main-navigation">
                    <ul className="d-flex justify-content-between align-items-center">
                        {this.listItems()}
                    </ul>
                </nav>
                <div class="ml-5 search-form">
                    <input type="text" placeholder="What service are you looking for?" />
                </div>
            </header>
        )
    }

}