import React from 'react';
import Layout from '../components/layout';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    static async getInitialProps({ req }) {
        const userAgent = req.params;
        return { userAgent }
    }

    sayHi() {
        alert('Hi!');
    }

    render() {
        return (
            <div>
                <Layout>
                    <h1 onClick={this.sayHi}>HOME | WEBSITE</h1>
                </Layout>
                <style jsx global>{`
                    $primary-color: black;
                    
                    p {
                      font-size: xx-large;
                      color: $primary-color;
                    }                    
                `}</style>
            </div>
        )
    }

}