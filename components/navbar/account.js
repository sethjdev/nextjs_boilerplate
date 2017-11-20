import Link from 'next/link'
import React from 'react'
import FontAwesome from 'react-fontawesome'

export default class extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="w-100 d-flex justify-content-start align-items-start flex-column">
                <p className="m-0"><FontAwesome className='mr-2' name='user-circle' /> Account</p>
                <p className="m-0"><a href="#">Sign In</a> or <a href="#">Register</a></p>
                <style jsx>{`
                    //styles go here
                    
                `}</style>
            </div>
        )
    }

}