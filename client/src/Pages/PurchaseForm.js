import React, { useState, useEffect } from 'react';
import WallpaperCard from './components/WallpaperCard';
import wallpapers from "../wallpepers";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "./logo.jpg"
import "../App.css";

function PurchaseForm() {
  // Setting up variables needed for purchase form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [addresses, setAddresses] = useState([]);
  // This one is for when a user select an addresses from address list
  const [selectedAddress, setSelectedAddress] = useState(null);
  // This one is for when a user select a wallpaper from wallpaper list
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);
  const [length, setLength] = useState(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  // This one is for storing total rolls needed
  const [totalRolls, setTotalRolls] = useState(0);
  // This one is for storing total cost of rolls
  const [totalCost, setTotalCost] = useState(0);
  
  // The function calculatingTotalRolls gets triggered when length/width/height changes
  // and calculates the total rolls then UI gets rerendered
  useEffect(() => {
    calculatingTotalRolls();
    // eslint-disable-next-line
  }, [length, width, height]);
  
  // The function useEffects gets triggered when totalRolls/selectedWallpaper changes
  // and calculates the total cost then UI gets rerendered
  useEffect(() => {
    let rollPrice = 0;
    if (totalRolls === 0) {
      setTotalCost(0);
    }
    if (totalRolls) {
      wallpapers.forEach((wallpaper) => {
        if (wallpaper.title === selectedWallpaper) {
          rollPrice = wallpaper.price;
        }
      });
      let totalCost = rollPrice * totalRolls;
      setTotalCost(totalCost);
    }
    // eslint-disable-next-line
  }, [totalRolls, selectedWallpaper]);
  
  // This function search for all addresses of selected postcode
  // then the fetched data store in a list using setAddresses
  function searchAddress() {
    fetch(
      `https://remote.address44.com/v2/exapi/?access-key=${process.env.REACT_APP_API_KEY}&postcode=${postcode}`
    )
      .then((response) => response.json())
      .then((data) => {
        setAddresses(data);
      });
  }
  
  // This function check if given string contains any number/special character
  function containsNumbersOrSpecialCharacter(str) {
    return /[\W\d]/.test(str);
  }
  
  // This function checks if firstName follows the right format then save it using setFirstName
  function handleFirstNameChange(event) {
    let firstName = event.target.value;
    let isNumberIncluded = containsNumbersOrSpecialCharacter(firstName);
    if (!isNumberIncluded) {
      setFirstName(firstName);
    }
  }
  
  // This function checks if lastName follows the right format then save it using setLastName
  function handleLastNameChange(event) {
    let lastName = event.target.value;
    let isNumberIncluded = containsNumbersOrSpecialCharacter(lastName);
    if (!isNumberIncluded) {
      setLastName(event.target.value);
    }
  }
  
  // Saves the users postcode input
  function handlePostcodeChange(event) {
    setPostcode(event.target.value.toUpperCase());
  }
  
  // Saves the users address input
  function handleAddressChange(event) {
    setSelectedAddress(event.target.value);
  }
  
  // Saves the users length input
  function handleLengthChange(event) {
    setLength(event.target.value);
  }
  
  // Saves the users width input
  function handleWidthChange(event) {
    setWidth(event.target.value);
  }
  
  // Saves the users length input
  function handleHeightChange(event) {
    setHeight(event.target.value);
  }
  
  // Saves the users selected wallpaper
  function handleWallpaperChange(event) {
    setSelectedWallpaper(event.target.value);
  }
  
  // This function calculates the total rolls needed
  const calculatingTotalRolls = () => {
    if (length && width && height) {
      let lengthNumber = parseInt(length);
      let widthNumber = parseInt(width);
      let heightNumber = parseInt(height);
      let wallArea =
        2 * (lengthNumber * heightNumber + widthNumber * heightNumber);
      let totalRolls = wallArea / 2.5;
      setTotalRolls(Math.ceil(totalRolls));
    }
  };
  
  // This function handles the buy button and send the user to checkout page
  const handleBuy = (event) => {
    event.preventDefault();
    window.location.href = "/checkout";
  };
    
return (
<div className="purchaseBody">
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
        </ul>
      </div>
    </div>
  </nav>

  <main className="purchaseMainbody">
    <form onSubmit={handleBuy} className="purchaseForm">
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        maxLength="20"
        value={firstName}
        onChange={handleFirstNameChange}
        required
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        maxLength="20"
        value={lastName}
        onChange={handleLastNameChange}
        required
      />

      <label htmlFor="address">Full address:</label>
      <input
        type="text"
        id="address"
        name="address"
        maxLength="100"
        value={selectedAddress}
        onChange={handleAddressChange}
        required
      />

      <div className="postcode">
        <label htmlFor="postcode">Postcode : </label>
        <input
          type="text"
          id="postcode"
          name="postcode"
          maxLength="10"
          value={postcode}
          onChange={handlePostcodeChange}
          required
        />
        <button
          type="button"
          className="purchaseFormBtns"
          onClick={searchAddress}
        >
          Search
        </button>
      </div>

      <label htmlFor="address">Addresses:</label>
      <select
        id="address"
        name="address"
        value={selectedAddress}
        onChange={handleAddressChange}
      >
        <option>Please select an address</option>
        {addresses.map((address) => (
          <option key={address.id} value={address.id}>
            {address.building_number}, {address.thoroughfare_and_descriptor},{" "}
            {address.post_town}
          </option>
        ))}
      </select>

      <label htmlFor="wallpaper">Wallpapers:</label>
      <select
        id="wallpaper"
        name="wallpaper"
        value={selectedWallpaper}
        onChange={handleWallpaperChange}
        required
      >
        <option value="">Please select a wallpaper</option>
        {wallpapers.map((wallpaper) => (
          <option key={wallpaper.title} value={wallpaper.title}>
            {" "}
            {wallpaper.title} Price is: {wallpaper.price}£
          </option>
        ))}
      </select>

      <label>Room Dimension (in m):</label>
      <label htmlFor="length">
        {length ? "Selected length :" : "Default length :"}{" "}
        {length ? length : "1"}m
      </label>
      <input
        type="range"
        min="1"
        max="100"
        step="0.1"
        defaultValue="1"
        id="length"
        name="length"
        value={length}
        onChange={handleLengthChange}
        placeholder="length"
        required
      />
      <label htmlFor="width">
        {width ? "Selected width :" : "Default width :"} {width ? width : "1"}m
      </label>
      <input
        type="range"
        min="1"
        max="100"
        step="0.1"
        defaultValue="1"
        id="width"
        name="width"
        value={width}
        onChange={handleWidthChange}
        placeholder="Width"
        required
      />
      <label htmlFor="height">
        {height ? "Selected height :" : "Default height :"}{" "}
        {height ? height : "1"}m
      </label>
      <input
        type="range"
        min="1"
        max="100"
        step="0.1"
        defaultValue="1"
        id="height"
        name="height"
        value={height}
        onChange={handleHeightChange}
        placeholder="height"
        required
      />

      <button type="submit" className="purchaseFormBtns">
        Buy
      </button>
    </form>

    <div className="resultSection">
      {/* checks if any wallpeper is selcted and if there's, it shows related wallpaper card */}
      {selectedWallpaper && (
        <WallpaperCard
          title={selectedWallpaper}
          price={wallpapers.find((w) => w.title === selectedWallpaper).price}
          availability={
            wallpapers.find((w) => w.title === selectedWallpaper).availability
          }
          amount={wallpapers.find((w) => w.title === selectedWallpaper).amount}
          src={wallpapers.find((w) => w.title === selectedWallpaper).src}
        />
      )}

      <div className="results">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Total Cost:</h5>
            <p class="card-text">
              {/* If total cost is ready it shows the total cost, if not it says incomplete order */}
              {length && width && height ? totalCost : "Incomplete order!"}{" "}
              {length && width && height ? "£" : ""}
            </p>
            <h5 class="card-title">Total rolls needed:</h5>
            <p class="card-text">
              {length && width && height ? totalRolls : "Incomplete order!"}{" "}
              {length && width && height ? "rolls" : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>

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

export default PurchaseForm
