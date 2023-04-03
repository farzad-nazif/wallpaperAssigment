import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "./logo.jpg"
import "../App.css";

function About() {
  return (
    <div className='aboutBody'>
      <nav class="navbar navbar-expand-lg  landingNavBar">
    <div class="container-fluid">
    <img src={logo} alt="logo" id='logo' />
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
      </ul>
      </div>
      </div>
      </nav>

      <main className='aboutMainBody' >
      <h4 className='aboutWarehouse'>
        Welcome to our wallpaper warehouse business! We are passionate about helping our customers transform their living and working spaces with stunning and unique wallpaper designs. Our warehouse is stocked with a wide variety of wallpaper options, from traditional to modern, colorful to subtle, and everything in between. With so many choices, you're sure to find the perfect wallpaper to express your individual style and personality.
        </h4>
      </main>

      <footer className='aboutFooter' >
        <ul class="social-icons">
          <li><a href="/"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="/"><i class="fab fa-twitter"></i></a></li>
          <li><a href="/"><i class="fab fa-instagram"></i></a></li>
          <li><a href="/"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com/farzad-nazif/wallpaperAssigment"  target="_blank" rel="noopener noreferrer"><i class="fab fa-brands fa-github"></i></a></li>
          <li className='contactIcons'><i class="fas fa-envelope"></i> farzadnazif.nz@gmail.com</li>
          <li className='contactIcons'><i class="fas fa-phone"></i> 073571 </li>
          <li className='contactIcons'><i class="fas fa-map-marker-alt"></i> Kingston, UK </li>
        </ul>
      </footer>
    </div>
  )
}

export default About
