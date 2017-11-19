import React from 'react';
import Layout from '../components/layout';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Layout>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h1>Welcome to the homepage.</h1>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }

}