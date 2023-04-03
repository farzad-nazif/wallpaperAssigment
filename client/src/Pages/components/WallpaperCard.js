import React from 'react'

function WallpaperCard({src,title,availability,amount,price}) {
  return (
<div class="card">
  <img src={src} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{availability?"This is available":"This is not available"}</p>
    <p class="card-text"> Amount left:{availability?amount:0} </p>
    <p class="card-text"> Price: {price}£ </p>
  </div>
</div>
  )
}

export default WallpaperCard
