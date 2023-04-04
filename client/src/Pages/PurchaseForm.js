import React, { useState, useEffect } from 'react';
import WallpaperCard from './components/WallpaperCard';
import wallpapers from "../wallpepers";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "./logo.jpg"
import "../App.css";

function PurchaseForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [postcode, setPostcode] = useState('');
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [selectedWallpaper, setSelectedWallpaper] = useState(null);
    const [length, setLength] = useState(null);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const [totalRolls,setTotalRolls] = useState(0);
    const [totalCost,setTotalCost] = useState(0);

    useEffect(()=>{
      calculatingTotalRolls();
      // eslint-disable-next-line
    },[length,width,height])
    
    useEffect(()=>{
      let rollPrice = 0;
      if(totalRolls){
        wallpapers.forEach((wallpaper)=>{ if(wallpaper.title === selectedWallpaper){ rollPrice = wallpaper.price } });
        let totalCost = rollPrice * totalRolls;
        setTotalCost(totalCost);
      }
      // eslint-disable-next-line
    },[totalRolls,selectedWallpaper])


    function searchAddress() {
      // Add code here to search for addresses based on postcode
      // and set the addresses state
      fetch(`https://remote.address44.com/v2/exapi/?access-key=EXRC55TI5GQ3N2QT63_224_168_XKM5IMJTV_8JKR0VDQ6FUQH8&postcode=${postcode}`).then((response) => response.json()).then((data)=>{setAddresses(data)})
    }
  
    function handleFirstNameChange(event) {
      setFirstName(event.target.value);
    }
  
    function handleLastNameChange(event) {
      setLastName(event.target.value);
    }
  
    function handlePostcodeChange(event) {
      setPostcode(event.target.value);
    }
  
    function handleAddressChange(event) {
      // Add code here to handle the selected address
      setSelectedAddress(event.target.value);
    }
    
    function handleLengthChange(event) {
        // Add code here to handle the selected address
        setLength(event.target.value);
    }
    
    function handleWidthChange(event) {
        // Add code here to handle the selected address
        setWidth(event.target.value);
    }

    function handleHeightChange(event) {
        // Add code here to handle the selected address
        setHeight(event.target.value);
    }

    function handleWallpaperChange(event) {
        // Add code here to handle the selected address
        setSelectedWallpaper(event.target.value);
    }

    const calculatingTotalRolls = () => {
         if(length&&width&&height){
            let lengthNumber = parseInt(length); 
            let widthNumber = parseInt(width); 
            let heightNumber = parseInt(height);
            // let totalSurface = lengthNumber * widthNumber * heightNumber;
            let perimeter = 2 * (lengthNumber + widthNumber);
            let wallArea = perimeter * heightNumber;

            let totalRolls = wallArea / 2.5;
            setTotalRolls(Math.ceil(totalRolls)); 
         }
    }
  
  return (
    <div className='purchaseBody'>
      <nav class="navbar navbar-expand-lg  landingNavBar">
    <div class="container-fluid">
    <img src={logo} alt="logo" id='logo' />
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/products">Products</a>
        </li>
      </ul>
      </div>
      </div>
      </nav>

      <main className='purchaseMainbody' >
      <form className='purchaseForm'>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleFirstNameChange} required />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleLastNameChange} required />

      <label htmlFor="address1">Full address:</label>
      <input type="text" id="address1" name="address1" value={selectedAddress} onChange={handleAddressChange} required />


      <div className="postcode">
        <label htmlFor="postcode">Postcode:</label>
        <input type="text" id="postcode" name="postcode" value={postcode} onChange={handlePostcodeChange} />
        <button type="button" onClick={searchAddress}>Search</button>
      </div>

      <label htmlFor="address">Address:</label>
      <select id="address" name="address" value={selectedAddress} onChange={handleAddressChange} required>
        <option >Please select an address</option>
        {addresses.map((address) => (
          <option key={address.id} value={address.id}>{address.building_number}, {address.thoroughfare_and_descriptor}, {address.post_town}</option>
        ))}
      </select>

      <label htmlFor="wallpaper" >Wallpapers:</label>
      <select id="wallpaper" name="wallpaper" value={selectedWallpaper} onChange={handleWallpaperChange} required>
        <option value="">Please select a wallpaper</option>
        {wallpapers.map((wallpaper) => (
          <option key={wallpaper.title} value={wallpaper.title} > {wallpaper.title} Price is: {wallpaper.price}£</option>
        ))}
      </select>

      <label>Dimension (in m):</label>
      <input type="text" id="length" name="length" value={length} onChange={handleLengthChange} placeholder="length" required />
      <input type="text" id="address1" name="address1" value={width} onChange={handleWidthChange} placeholder="Width" required />
      <input type="text" id="address1" name="address1" value={height} onChange={handleHeightChange} placeholder="height" required />


      <input type="submit" value="Submit" />
    </form>
    
    <div className='resultSection'>

    {selectedWallpaper && (
  <WallpaperCard
    title={selectedWallpaper}
    price={wallpapers.find((w) => w.title === selectedWallpaper).price}
    availability={wallpapers.find((w) => w.title === selectedWallpaper).availability}
    amount={wallpapers.find((w) => w.title === selectedWallpaper).amount}
    src={wallpapers.find((w) => w.title === selectedWallpaper).src}
  />
   )}
   
   <div className='results'>
   <div class="card">
  <div class="card-body">
    <h5 class="card-title">Total Cost:</h5>
    <p class="card-text">{ length&&width&&height?totalCost:"Incomplete order!"} { length&&width&&height?"£":""}</p>
    <h5 class="card-title">Total rolls needed:</h5>
    <p class="card-text">{length&&width&&height?totalRolls:"Incomplete order!"} {length&&width&&height?"rolls":""}</p>
  </div>
</div>
   </div>
   </div>


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

export default PurchaseForm
