import React from 'react';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="headline-bar"></div>
                <style jsx>{`    
                    .headline-bar {
                        display: block;
                        height: 5px;
                        width: 30%;
                        background-color: #007bff;
                        margin: 25px 0;
                    }
                `}</style>
            </div>
        )
    }

}