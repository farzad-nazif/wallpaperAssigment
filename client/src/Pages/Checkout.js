import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "./logo.jpg"
import "../App.css";

function Checkout() {
return (
// checkout Page body  
<div className="checkOutBody">
  {/* Navigation menu for checkout page */}
  <nav class="navbar navbar-expand-lg  landingNavBar">
    <div class="container-fluid">
      <img src={logo} alt="logo" id="logo" />
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/products">
              Products
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/purchase">
              Buy Again
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  {/* Main section of body of checkout page */}
  <main className="aboutMainBody">
    <h1 id="thanksSentence">Thanks for your purchase!</h1>
  </main>
   
  {/* Footer section */}
  <footer className="aboutFooter">
    <ul class="social-icons">
      <li>
        <a href="/">
          <i class="fab fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a href="/">
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="/">
          <i class="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="/">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/farzad-nazif/wallpaperAssigment"
          target="_blank"
          // TO avoid production bugs
          rel="noopener noreferrer"
        >
          <i class="fab fa-brands fa-github"></i>
        </a>
      </li>
      <li className="contactIcons">
        <i class="fas fa-envelope"></i> farzadnazif.nz@gmail.com
      </li>
      <li className="contactIcons">
        <i class="fas fa-phone"></i> 073571{" "}
      </li>
      <li className="contactIcons">
        <i class="fas fa-map-marker-alt"></i> Kingston, UK{" "}
      </li>
    </ul>
  </footer>
</div>
)
}

export default Checkout
