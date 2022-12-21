import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light me-1" type="submit" >Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

//this is used to know about what type we will give to our property
//isrequired is used to get the value as it is required for our components 
Navbar.prototype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

//this is used to get a default value in the property if the values in the property is not given, the property must not be "Undefined"

Navbar.defaultProps = {
    title: "Type the Title Here!!",
    aboutText: "About"
}                    