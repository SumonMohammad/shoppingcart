import React, { Fragment } from 'react'
const date= new Date()

const Footer = () => {
    return (
        <Fragment>
            <footer className="py-1">
                <p className="text-center mt-1">
                    Shopping Cart - {date.toLocaleDateString()}, All Rights Reserved
                </p>
            </footer>
        </Fragment>
    )
}

export default Footer
