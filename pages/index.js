import React from 'react';
import Layout from '../components/layout';
import { Button, Fade } from 'reactstrap';

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
                <Button color="danger">Danger!</Button>
                <h1 onClick={this.sayHi}>HOME | WEBSITE</h1>
            </Layout>
        )
    }

}