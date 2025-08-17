document.addEventListener("DOMContentLoaded", () => {
  // Load cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

  const addCartButtons = document.querySelectorAll(".add-to-cart");
  const badgeHolder = document.querySelector(".badgeHolder");

  // Update badge
  function IconBadge(count) {
    if (!badgeHolder) return;
    if (count > 0) {
      badgeHolder.style.display = "block";
      badgeHolder.textContent = count;
    } else {
      badgeHolder.style.display = "none";
    }
  }

  // Save cart to localStorage
  function updateCartInStorage() {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }

  // Toast message
  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
  }

  // Restore button states on page load
  addCartButtons.forEach(button => {
    const productId = button.getAttribute("data-id");
    if (cart.find(item => item.id === productId)) {
      button.textContent = "Go To Cart";
      
    }
  });

  // Handle button clicks
  addCartButtons.forEach(button => {
    button.addEventListener("click", function () {
      const productId = button.getAttribute("data-id");

      // If item is already in cart → go to cart
      if (cart.find(item => item.id === productId)) {
        window.location.href = "cart.html";
        return;
      }

      // Get product details
      let product = button.closest(".product-card");
      let name = product.querySelector(".title").textContent;
      let price = product.querySelector(".price").textContent;
     let imgPath = product.querySelector(".img").getAttribute("src");
    let imgFile = imgPath.split("/").pop(); // e.g. "Product1.jpg"

      // Add to cart
      cart.push({ id: productId, name, price, img:imgFile });
      updateCartInStorage();
      IconBadge(cart.length);

      // Change button state
      button.textContent = "Go To Cart";
     

      // Show toast
      showToast("Item Added to Cart Successfully!");
    });
  });

  // Initial badge update
  IconBadge(cart.length);

  // Cart icon click
  document.getElementById("cart-icon").addEventListener("click", () => {
    window.location.href = "cart.html";
  });
});
