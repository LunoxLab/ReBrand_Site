

let addCart = document.querySelectorAll(".add-to-cart");

addCart.forEach(button=>{
     
    button.addEventListener("click",()=>{

   

    let span = document.createElement("span");
    span.classList.add("add-cart-msg");
    span.textContent = "Added to Cart";
     let productCard = button.closest(".product-card");
    
    if (productCard) {
      productCard.appendChild(span);
    }
   
     });

});
