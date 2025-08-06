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

  // 4. Get current cart from localStorage (or start empty)
 let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
 

 document.addEventListener("DOMContentLoaded", () => {
  IconBadge(cart.length);

let addCart = document.querySelectorAll(".add-to-cart");

function IconBadge(count){
  // let icon = document.createElement("p");
  // icon.classList.add("iconStyle");
  let badgeHolder = document.querySelector(".badgeHolder");
  if(!badgeHolder) return;
  if(count>0){
    badgeHolder.style.display = "block";
    badgeHolder.textContent = count;

  }else{
    badgeHolder.style.display = "none";
  }
//   badgeHolder.style.display = "block";
// badgeHolder.textContent = count;


}


function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  // Hide it after 2 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}


addCart.forEach(button=>{
  button.addEventListener("click", function(){
 // 1. Get parent element using closet (the .product div)
    let product = button.closest(".products");

    //Get Data from it//
    let name = product.querySelector(".title").textContent;
    let price = product.querySelector(".price").textContent;
    let img = product.querySelector(".img").src;

    let item = {
      id: Date.now(), 
      name: name,
      price:price,
      img:img
    };

    cart.push(item);
   updateCartInStorage();
   IconBadge(cart.length);
      

   

    // If already added, redirect to cart
    if(button.classList.contains("Added")){
      window.location.href="\cart.html";
      return;
    }

     // Add item to cart logic here...
     button.textContent = "Go To Cart";
     button.classList.add("Added");
     updateCartInStorage();


    //Show pop out msg
    showToast("Item Added to Cart Successfully!");
    //count Icon Badge
    
  });
});

// Number badge count along with cart icon to see increment when adding items to cart//


//On Clicking Location
document.getElementById("cart-icon").addEventListener("click",()=>{
window.location.href = "/cart.html";

});

function updateCartInStorage(){
     localStorage.setItem("cartItems", JSON.stringify(cart))
    }

});

// search functionality

 document.addEventListener('DOMContentLoaded', function(){
	const searchInput = document.getElementById('search-input');	
	const products= document.querySelectorAll('.product-card');
	
	function performSearch(){
		const searchTerm = searchInput.value.toLowerCase().trim();
		
		products.forEach(product => {
			const name = product.dataset.name.toLowerCase();
			const tags = product.dataset.tags.toLowerCase();
		
		// check if search term matches with product property aka name
		const isVisible = name.includes(searchTerm) || 
		tags.includes(searchTerm);
		
		// show/hide product based on search
		product.style.display = isVisible ? 'block' : 'none';  
		});
		
	}

	searchInput.addEventListener("keyup", function(e){
		if(e.key === "Enter"){
			performSearch();

			// to properly show the products, we can invoke another web page to display the product in a row with suffeicient information about the product.
		}
	});
		
});







