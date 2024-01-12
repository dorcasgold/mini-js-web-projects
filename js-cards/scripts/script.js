import { products } from "./products.js";

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
  <div class="card">
     <div class="img-container">
      <img class="product-image" src="${product.image}">
     </div>
     <p class="product-name">l${product.name}</p>
     <div class="rating">
         <img src="rating-50.png" alt="rating">
         <span>98</span>
     </div>
     <p class="price">$10.90</p>
  </div>
  `
})

document.querySelector(".cards-container").innerHTML = productsHTML;
