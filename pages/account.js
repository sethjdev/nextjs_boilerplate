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
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>Welcome to the account page!</h1>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }

}