import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
        <a href="/" className="navbar-brand">Rick & Morty</a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Search" />
        </form>
      </nav>
    )
}

export default Navbar
