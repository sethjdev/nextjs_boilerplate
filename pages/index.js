import React from 'react';
import Layout from '../components/layout';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    sayHi() {
        alert('Hi seth!');
    }

    render() {
        return (
            <Layout>
                <h1 onClick={this.sayHi}>HOME | WEBSITE</h1>
            </Layout>
        )
    }

}