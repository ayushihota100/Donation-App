import React from 'react'

const header = () => {
  return (
    <div> <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
        <a className="navbar-brand" href="#page-top"><p className='Smileytitle'>Smiley</p></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                <li className="nav-item"><a className="nav-link" href="#Orgranisations">Orgranisations</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
               
            </ul>
        </div>
    </div>
</nav></div>
  )
}

export default header