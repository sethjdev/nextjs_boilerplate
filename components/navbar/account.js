import Link from 'next/link'
import React from 'react'
import FontAwesome from 'react-fontawesome'

export default class extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>

                <div className="d-flex w-100 justify-content-between align-items-center">
                    <FontAwesome className='mr-3' name='user' />
                    <p className="m-0">Membership</p>
                </div>

                <style jsx>{`
                    //styles go here
                `}</style>

            </div>
        )
    }

}