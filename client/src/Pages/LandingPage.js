import React from 'react';
import logo from "./logo.jpg"
import "../App.css";

function LandingPage() {
  return (
    <div className='landingBody'>

    <nav class="navbar navbar-expand-lg  landingNavBar">
    <div class="container-fluid">
    <img src={logo} alt="logo" id='logo' />
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Find a store</a>
        </li>
      </ul>
      </div>
      </div>
      </nav>

      <main className='landingMainBody' >Main body</main>
      <footer className='landingFooter' >footer</footer>
    </div>
  )
}

export default LandingPage
