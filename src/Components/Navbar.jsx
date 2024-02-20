import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
      <div className="container py-2">
        <Link className="navbar-brand fs-2 fw-bold" to="">START FRAMEWORK</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/about" aria-current="page">ABOUT
                <span className="visually-hidden">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
    </>
  )
}
