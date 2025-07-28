document.addEventListener('DOMContentLoaded', function() {
  const searchIcon = document.querySelector('.search-icon');
  const searchInput = document.querySelector('.search-input');

  searchIcon.addEventListener('click', function() {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
      searchInput.focus(); // Focus the input when it appears
    }
  });
});




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
